import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Manage Students by Erol Mahmutoglu',
  description: "Admin panel for managing students' data.",
  keywords: [
    'admin',
    'panel',
    'manage',
    'students',
    'data',
    'student',
    'management',
  ],
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
