import './globals.css';
import Header from '@/components/header/Header'
import HeaderBackground from '@/components/header/HeaderBackground'

//MetaData is reserved for Nextjs
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
