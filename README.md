# Casa Arcobaleno Website

Production Next.js website for Casa Arcobaleno, a boutique home, family, and lifestyle support company in Austin, Texas.

## Editing Content

- Services, gallery items, navigation, email, and location live in `lib/site-data.ts`.
- Page layouts live in `app/`.
- Reusable sections live in `components/`.
- Website images live in `public/images/`.

## Inquiry Email

The contact form sends inquiries server-side to `casa.arcobalenotx@gmail.com` through Resend.

For local testing, create a private `.env.local` file:

```bash
cp .env.example .env.local
```

Then set these values in `.env.local` and in your hosting provider:

```bash
RESEND_API_KEY=your_resend_key
INQUIRY_TO_EMAIL=casa.arcobalenotx@gmail.com
INQUIRY_FROM_EMAIL="Casa Arcobaleno <hello@your-verified-domain.com>"
```

`INQUIRY_TO_EMAIL` is where inquiries are delivered. `INQUIRY_FROM_EMAIL` should use a sender/domain verified in Resend. Do not place email credentials in browser code or commit `.env.local`.

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
