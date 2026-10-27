# Dietitian Health Consult

Marketing site for Dietitian Health Consult, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Free discovery-call requests

The discovery-call form is a static frontend that posts to `public/api/discovery-request.php`. During `next build`, that PHP handler is copied into `out/api/` and uploaded with the rest of the static export. GreenGeeks must execute PHP for the endpoint to send requests; it emails submissions to `info@dietitianhealthconsult.com` and does not save them in a website database.

The PHP handler sends through GreenGeeks SMTP using PHPMailer and authenticated SSL/TLS (port 465). It expects a private PHP configuration file at `/home/dieti2/dhc-mail-config.php`, outside `public_html`; do not commit or upload mailbox credentials through GitHub. Create that file in cPanel File Manager with:

```php
<?php
return [
    'host' => 'mail.dietitianhealthconsult.com',
    'port' => 465,
    'username' => 'info@dietitianhealthconsult.com',
    'password' => 'SET-THE-MAILBOX-PASSWORD-HERE',
];
```

Restrict the file permissions to the account owner (typically `0600`). After deploying, submit a test request and verify it appears in cPanel **Track Delivery** and reaches the business inbox (including spam). The endpoint returns success only after authenticated SMTP accepts the message. PHP is not available in the local development environment, so endpoint execution and real email delivery must be verified on GreenGeeks.

## Local development

```bash
npm install
npm run dev
```

## Production build

The site is configured for static export. `npm run build` generates the deployable website in `out/`.

Upload the contents of `out/` to the GreenGeeks document root:

```text
/home/dieti2/public_html
```

Business content is centralized in `src/content/site.ts` so routine text, pricing, appointment options, and booking links can be updated without searching through page markup.

## GreenGeeks deployment

The manual deployment workflow is `.github/workflows/deploy.yml`. Add these repository secrets in GitHub under **Settings → Secrets and variables → Actions**:

```text
GG_FTP_SERVER=ftp.dietitianhealthconsult.com
GG_FTP_USERNAME=github-deploy-site@dietitianhealthconsult.com
GG_FTP_PASSWORD=the FTP account password
```

Run the workflow from the GitHub Actions tab with `dry_run` enabled first. The FTP account is scoped to the website document root, so the workflow uploads `out/` to its `./` directory, which maps to `/home/dieti2/public_html`.
