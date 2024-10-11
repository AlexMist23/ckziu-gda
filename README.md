# Next.js Application Template

This is a template for a Next.js application with shadcn UI, Vercel Postgres, and Auth.js (NextAuth.js v5).

## Features

- Next.js 14 with App Router
- TypeScript
- shadcn UI for styled components
- Vercel Postgres for database
- Auth.js (NextAuth.js v5) for authentication
- Dark mode support with next-themes
- Contact form with email sending functionality
- User profile page

## Getting Started

1. Clone this repository
2. Copy `.env.example` to `.env.local` and fill in the necessary environment variables
3. Install dependencies: `npm install` or `yarn install`
4. Run the development server: `npm run dev` or `yarn dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

[... existing environment variables section ...]

## Database Setup

[... existing database setup instructions ...]

## Setting Up the First Admin User

[... existing admin user setup instructions ...]

## Project Structure

- `/src/app`: Next.js app router pages and API routes
  - `/contact`: Contact form page and API route
  - `/profile`: User profile page
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and configurations
- `/src/hooks`: Custom React hooks
- `/src/providers`: React context providers
- `/src/types`: TypeScript type definitions

## Customization

- Update `src/app/layout.tsx` to modify the main layout
- Modify `src/components/layouts/header` to customize the navigation
- Adjust `src/lib/auth.ts` to configure authentication providers
- Customize the contact form in `src/app/contact/page.tsx`
- Modify the user profile page in `src/app/profile/page.tsx`

## Deployment

[... existing deployment instructions ...]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
