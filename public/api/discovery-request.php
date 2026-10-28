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
if (trim((string) ($data['validationField'] ?? '')) !== '') {
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

$contactMethod = $region === 'canada' ? 'Phone call (Canadian number)' : 'WhatsApp message or call';
$escape = static fn (string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeName = $escape($name);
$safePhone = $escape($phone);
$safeWindow = $escape($callbackWindows[$callbackWindow]);
$safeContactMethod = $escape($contactMethod);
$phoneLink = preg_replace('/[^0-9+]/', '', $phone) ?? '';
$whatsAppNumber = preg_replace('/\D/', '', $phone) ?? '';
$topicsHtml = '';
$topicsText = [];

foreach ($topics as $topic) {
    $safeTopic = $escape($topic);
    $topicsHtml .= '<li style="margin:0 0 8px;padding:10px 12px;background:#fbf6f3;border:1px solid #f0e6e1;color:#44383a;">' . $safeTopic . '</li>';
    $topicsText[] = '- ' . $topic;
}

$contactAction = $region === 'canada'
    ? '<a href="tel:' . $escape($phoneLink) . '" style="display:inline-block;padding:12px 18px;background:#830b38;color:#ffffff;text-decoration:none;font-weight:bold;">Call ' . $safeName . '</a>'
    : '<a href="https://wa.me/' . $escape($whatsAppNumber) . '" style="display:inline-block;padding:12px 18px;background:#830b38;color:#ffffff;text-decoration:none;font-weight:bold;">Open WhatsApp chat</a>';

$htmlBody = '<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New discovery-call request</title>
</head>
<body style="margin:0;padding:24px 12px;background:#f5f1ee;font-family:Arial,Helvetica,sans-serif;color:#342b2e;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">A new callback request is waiting for your review.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #eadfe2;">
    <tr>
      <td style="padding:28px 32px;background:#4b1028;color:#ffffff;">
        <p style="margin:0 0 8px;color:#efd8df;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">Dietitian Health Consult</p>
        <h1 style="margin:0;font-family:Georgia,\'Times New Roman\',serif;font-size:28px;line-height:1.2;font-weight:normal;">New discovery-call request</h1>
        <p style="margin:10px 0 0;color:#f4e9ed;font-size:14px;line-height:1.5;">A prospective client has requested a complimentary callback.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px 12px;">
        <p style="margin:0 0 8px;color:#75676b;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Preferred callback window</p>
        <p style="margin:0;padding:14px 16px;background:#fbf6f3;border-left:4px solid #830b38;color:#4b1028;font-size:18px;font-weight:bold;">' . $safeWindow . '</p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px 8px;">
        <h2 style="margin:0 0 12px;color:#4b1028;font-family:Georgia,\'Times New Roman\',serif;font-size:20px;font-weight:normal;">Contact details</h2>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
          <tr><td style="width:38%;padding:10px 0;border-bottom:1px solid #eee7e8;color:#75676b;font-size:13px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee7e8;color:#342b2e;font-size:14px;font-weight:bold;">' . $safeName . '</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee7e8;color:#75676b;font-size:13px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee7e8;font-size:14px;"><a href="tel:' . $escape($phoneLink) . '" style="color:#830b38;text-decoration:underline;">' . $safePhone . '</a></td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee7e8;color:#75676b;font-size:13px;">Number type</td><td style="padding:10px 0;border-bottom:1px solid #eee7e8;color:#342b2e;font-size:14px;">' . ($region === 'canada' ? 'Canadian' : 'International') . '</td></tr>
          <tr><td style="padding:10px 0;color:#75676b;font-size:13px;">Contact method</td><td style="padding:10px 0;color:#342b2e;font-size:14px;">' . $safeContactMethod . '</td></tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 32px 8px;">
        <h2 style="margin:0 0 12px;color:#4b1028;font-family:Georgia,\'Times New Roman\',serif;font-size:20px;font-weight:normal;">They would like to ask about</h2>
        <ul style="margin:0;padding:0;list-style:none;">' . $topicsHtml . '</ul>
      </td>
    </tr>
    <tr>
      <td style="padding:22px 32px 30px;">' . $contactAction . '</td>
    </tr>
    <tr>
      <td style="padding:18px 32px;background:#faf7f5;border-top:1px solid #eee7e8;color:#75676b;font-size:12px;line-height:1.6;">
        This is a callback request, not a confirmed appointment. The visitor was asked not to include medical or health details.
      </td>
    </tr>
  </table>
</body>
</html>';

$body = implode("\n", [
    'New discovery-call request - Dietitian Health Consult',
    '',
    'Preferred callback window: ' . $callbackWindows[$callbackWindow],
    '',
    'Contact details',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Number type: ' . ($region === 'canada' ? 'Canadian' : 'International'),
    'Preferred contact method: ' . $contactMethod,
    '',
    'General topics:',
    implode("\n", $topicsText),
    '',
    'This is a callback request, not a confirmed appointment. The visitor was asked not to include medical or health details.',
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
    $mailer->isHTML(true);
    $mailer->Subject = 'New discovery-call request';
    $mailer->Body = $htmlBody;
    $mailer->AltBody = $body;
    $mailer->send();
} catch (Throwable $error) {
    error_log('DHC discovery request: authenticated SMTP send failed.');
    respond(503, ['error' => 'The request could not be delivered.']);
}

respond(200, ['ok' => true]);
