import Link from 'next/link';
import Header from '@/components/Header'
// so as i understand we can not write this in import {Header}

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about">About Link</Link>
    </main>
  );
}
