import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Manage Students',
  description: "Admin panel for managing students' data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
