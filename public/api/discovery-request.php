<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');

$mailerAutoload = __DIR__ . '/vendor/autoload.php';
if (is_file($mailerAutoload)) {
    require_once $mailerAutoload;
}

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Method not allowed.']);
}

$host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
$allowedHosts = ['dietitianhealthconsult.com', 'www.dietitianhealthconsult.com'];
$requestHost = strtolower((string) parse_url($origin, PHP_URL_HOST));

if (!in_array($host, $allowedHosts, true) || ($origin !== '' && !in_array($requestHost, $allowedHosts, true))) {
    respond(403, ['error' => 'Request origin not allowed.']);
}

if (stripos((string) ($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
    respond(415, ['error' => 'Expected a JSON request.']);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 8192) {
    respond(413, ['error' => 'Request is too large.']);
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(400, ['error' => 'Invalid request.']);
}

// Quietly accept honeypot submissions without sending email.
if (trim((string) ($data['companyWebsite'] ?? '')) !== '') {
    respond(200, ['ok' => true]);
}

$name = trim(preg_replace('/[\r\n\t]+/', ' ', (string) ($data['name'] ?? '')) ?? '');
$phone = trim(preg_replace('/[\r\n\t]+/', ' ', (string) ($data['phone'] ?? '')) ?? '');
$region = (string) ($data['numberRegion'] ?? '');
$callbackWindow = (string) ($data['callbackWindow'] ?? '');
$callbackWindows = [
    'sat_2_4' => 'Saturday, 2-4 p.m. (Edmonton time)',
    'sat_7_9' => 'Saturday, 7-9 p.m. (Edmonton time)',
    'sun_5_7' => 'Sunday, 5-7 p.m. (Edmonton time)',
];
$whatsappReady = ($data['whatsappReady'] ?? false) === true;
$consent = ($data['consent'] ?? false) === true;
$allowedTopics = [
    'Packages and fees',
    'What to expect at an initial consultation',
    'Appointment format and availability',
    'General questions about nutrition services',
];
$topics = $data['topics'] ?? [];

if ($name === '' || strlen($name) > 100 || $phone === '' || strlen($phone) > 40) {
    respond(422, ['error' => 'Please provide a valid name and phone number.']);
}
if (!preg_match('/^[+0-9().\-\s]{7,40}$/', $phone)) {
    respond(422, ['error' => 'Please check the phone number and try again.']);
}
if (!in_array($region, ['canada', 'international'], true)) {
    respond(422, ['error' => 'Please choose whether the phone number is Canadian.']);
}
if ($region === 'international' && !$whatsappReady) {
    respond(422, ['error' => 'Please confirm WhatsApp is active on this number.']);
}
if (!is_array($topics) || count($topics) === 0 || count($topics) > count($allowedTopics)) {
    respond(422, ['error' => 'Please choose from the listed topics.']);
}
foreach ($topics as $topic) {
    if (!is_string($topic) || !in_array($topic, $allowedTopics, true)) {
        respond(422, ['error' => 'Please choose from the listed topics.']);
    }
}
if (!isset($callbackWindows[$callbackWindow]) || !$consent) {
    respond(422, ['error' => 'Please confirm the callback window and read the notice.']);
}

$topicText = count($topics) > 0 ? implode("\n- ", $topics) : 'No topics selected';
$contactMethod = $region === 'canada' ? 'Phone call (Canadian number)' : 'WhatsApp message or call';
$body = implode("\n", [
    'New free discovery-call request - Dietitian Health Consult',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Number region: ' . ($region === 'canada' ? 'Canada' : 'International'),
    'Preferred contact method: ' . $contactMethod,
    'Preferred callback window: ' . $callbackWindows[$callbackWindow],
    'General topics:',
    '- ' . $topicText,
    '',
    'The visitor confirmed the collection notice and did not submit medical details.',
]);

$configPath = dirname(__DIR__, 2) . '/dhc-mail-config.php';
if (!class_exists(PHPMailer::class) || !is_readable($configPath)) {
    error_log('DHC discovery request: mailer dependency or private mail configuration is unavailable.');
    respond(503, ['error' => 'The request could not be delivered.']);
}

$mailConfig = require $configPath;
if (!is_array($mailConfig) || empty($mailConfig['username']) || empty($mailConfig['password'])) {
    error_log('DHC discovery request: private mail configuration is incomplete.');
    respond(503, ['error' => 'The request could not be delivered.']);
}

try {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = (string) ($mailConfig['host'] ?? 'mail.dietitianhealthconsult.com');
    $mailer->SMTPAuth = true;
    $mailer->Username = (string) $mailConfig['username'];
    $mailer->Password = (string) $mailConfig['password'];
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailer->Port = (int) ($mailConfig['port'] ?? 465);
    $mailer->CharSet = 'UTF-8';
    $mailer->setFrom((string) $mailConfig['username'], 'Dietitian Health Consult');
    $mailer->addAddress('info@dietitianhealthconsult.com');
    $mailer->Subject = 'New free discovery-call request';
    $mailer->Body = $body;
    $mailer->send();
} catch (Throwable $error) {
    error_log('DHC discovery request: authenticated SMTP send failed.');
    respond(503, ['error' => 'The request could not be delivered.']);
}

respond(200, ['ok' => true]);
