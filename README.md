# Dietitian Health Consult

Marketing site for Dietitian Health Consult, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

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
