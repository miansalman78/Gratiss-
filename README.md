# Gratissé Discovery App

A Next.js application for discovering and sharing free products, featuring a custom authentication flow and dynamic interest selection.

## Project Structure

The project follows a standard Next.js App Router structure. Below is an overview of the key directories and files:

```
src/
├── app/                    # App Router pages and layouts
│   ├── api/                # API routes (e.g., NextAuth)
│   ├── interests/          # Interest selection page
│   ├── signin/             # Sign-in page with mock auth
│   ├── signup/             # Sign-up page with mock auth
│   ├── favicon.ico         # App icon
│   ├── globals.css         # Global styles (Tailwind)
│   ├── layout.tsx          # Root layout
│   ├── loading.tsx         # Global loading UI (green pulse)
│   ├── page.tsx            # Root page (redirects to /signin)
│   └── template.tsx        # Global navigation delay logic
├── components/             # Reusable UI components
├── data/                   # Static data files
├── hooks/                  # Custom React hooks
├── store/                  # State management (Zustand)
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions
```

## Key Features

- **Mock Authentication**: Frontend-only sign-in/sign-up simulation using `localStorage`.
- **Global Loading State**: A custom 2-second loading screen on all navigation events.
- **Dynamic Styling**: Interest categories feature distinct color themes.
- **NextAuth Integration**: Google authentication is configured (alongside the mock flow).

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000). You will be redirected to the sign-in page.
