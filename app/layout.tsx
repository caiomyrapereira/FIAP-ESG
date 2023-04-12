import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import './navbar.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      \
      <body>
        <nav className='bg-white'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href='/' className='flex items-center'>
              <Image src='/logo.png' alt='ESG Logo' className='h-8 mr-3' width={128} height={23} priority />
            </Link>

            <button
              data-collapse-toggle='navbar-default'
              type='button'
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              aria-controls='navbar-default'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
            <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
              <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
                <li>
                  <Link href='/' className='link block py-2 pl-3 pr-4 rounded md:p-0'>
                    Início
                  </Link>
                </li>
                <li>
                  <Link href='about' className='link block py-2 pl-3 pr-4 rounded md:p-0'>
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href='esg' className='link block py-2 pl-3 pr-4 rounded md:p-0'>
                    ESG
                  </Link>
                </li>
                <li>
                  <Link href='forum' className='link block py-2 pl-3 pr-4 rounded md:p-0'>
                    Fórum
                  </Link>
                </li>
                <li>
                  <Link href='login' className='link block py-2 pl-3 pr-4 rounded md:p-0'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href='register' className='link block py-2 pl-3 pr-4 rounded md:p-0'>
                    Registrar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
