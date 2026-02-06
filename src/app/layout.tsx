import React from 'react';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/providers/ThemeContext';
import personalInfo from '@/lib/data/personalInfo.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `${personalInfo.name} - ${personalInfo.role} | Portfolio`,
    description: personalInfo.summary,
    keywords: 'Full-Stack Developer, React, Node.js, ERP Systems, Web Development, Portfolio, Vivek Patel',
    authors: [{ name: personalInfo.name }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-background text-foreground antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
