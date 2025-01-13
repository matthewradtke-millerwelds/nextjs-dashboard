import { Noto_Sans, Inter, Lusitana } from 'next/font/google';
 
 
export const notoSans = Noto_Sans({subsets: ['latin']}); // Miller font!
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });