import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sensai - AI Career Coach",
  description: "Sensai is an AI career coach that helps you build your career with personalized guidance and resources.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang="en" suppressHydrationWarning>
       <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Toaster richColors />
            <footer className="bg-muted/50 py-8">
              <div className="container mx-auto text-center p-4 text-gray-200">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Made By Akshit
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
