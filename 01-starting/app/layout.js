import './globals.css'
// you could also use import classes from './global.css' for using classes

//metadata is a reserved name
//all nested pages use the same metadata unless you define sth else for them
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) { // children is the content of the page.js file that is currently acitve
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

//# Course info:
// app/icon.png is the favicon for the project