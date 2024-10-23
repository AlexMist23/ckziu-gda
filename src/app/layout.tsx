import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header/header";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/layouts/footer";
import { Toaster } from "@/components/ui/toaster";
import { AdminSidebar } from "@/components/layouts/admin-sidebar/admin-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AdminSidebarBreadcrumbs } from "@/components/layouts/admin-sidebar/admin-sidebar-breadcrumbs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ckziu1 - 2LL1",
  description: "student app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AdminSidebar variant="inset"></AdminSidebar>

            <SidebarInset>
              <Header />
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <AdminSidebarBreadcrumbs />
              </header>
              <main className="p-4 flex flex-col">{children}</main>
              <Footer />
            </SidebarInset>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
