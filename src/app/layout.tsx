import type { Metadata } from 'next'
import './globals.css'



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
        {children}
        </body>
    </html>
  );
}
