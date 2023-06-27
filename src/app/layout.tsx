import DropdownMenu from '@/components/DropdownMenu';
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
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>
        <nav className='navbar bg-black/50 backdrop-blur-2xl md:px-24 border-b-[0.5px] border-white/25 fixed top-0 w-full z-50'>
          <div className='navbar-start'>
            <a className='btn btn-ghost normal-case text-xl' href='/'>
              DigitalSpark
            </a>
          </div>

          <div className='navbar-end'>
            <ul className='hidden md:flex items-center gap-2'>
              {' '}
              <li className='text-sm text-white/75 hover:text-white duration-100'>
                <a href='#aboutus'>About us</a>
              </li>
              <li className='text-sm text-white/75 hover:text-white duration-100'>
                <a href='#ourwork'>Our work</a>
              </li>
              <li className='text-sm text-white/75 hover:text-white duration-100'>
                <a href='#pricing'>Pricing</a>
              </li>
              <li className='bg-white text-black rounded-full px-6 py-2 font-medium ml-6'>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
            <DropdownMenu />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
