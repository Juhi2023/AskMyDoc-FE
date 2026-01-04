import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/theme-context';
import { SettingsProvider } from '@/contexts/settings-context';
import {Helmet} from "react-helmet";



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <AuthProvider>
                <SettingsProvider>
                <Helmet>
                    <title>AskMyDoc - Intelligent Document Search</title>
                    <meta
                    name="description"
                    content="Upload documents, search semantically, and get AI-powered answers from your knowledge base."
                    />
                    <meta
                    name="keywords"
                    content="document search, AI, semantic search, RAG, vector database"
                    />
                </Helmet>
                    {children}
                    <Toaster
                        position="top-right"
                        containerStyle={{
                            top: 80,
                        }}
                        toastOptions={{
                            duration: 4000,
                            style: {
                                background: '#1e293b',
                                color: '#f8fafc',
                                border: '1px solid #334155',
                            },
                            success: {
                                iconTheme: {
                                    primary: '#10b981',
                                    secondary: '#f8fafc',
                                },
                            },
                            error: {
                                iconTheme: {
                                    primary: '#ef4444',
                                    secondary: '#f8fafc',
                                },
                            },
                        }}
                    />
                </SettingsProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}