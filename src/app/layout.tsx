import './globals.css';
import {Poppins} from 'next/font/google';

const inter = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Digital Spark Studio',
  description: 'We design, build and maintain websites for small businesses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
