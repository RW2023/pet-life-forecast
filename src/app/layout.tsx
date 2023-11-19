import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/Components/Ui/Navbar';
import Footer from '@/Components/Ui/Footer';



export const metadata: Metadata = {
  title: 'Pet Life Forecast',
  description: 'Pet life forecaster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className='bg-base-500'>
        <Navbar />
        {children}
        </body>
        <Footer />
    </html>
  );
}
