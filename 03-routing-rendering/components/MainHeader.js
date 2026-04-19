import Link from 'next/link';
import NavLink from './NavLink';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <NavLink title="News" href="/news" />
          <NavLink title="Archive" href="/archive" />
        </ul>
      </nav>
    </header>
  );
}
