import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import classes from '@/components/header/header.module.css'
import Menu from '@/components/header/Menu'

export default function Header() {
    console.log(logo)

    const links = [
        { title: "Browse Meals", href: "/meals" },
        { title: "Foodies Community", href: "/community" }
    ]
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logo} placeholder="blur" alt="A plate with food on it" priority />
                NextLevel Food
            </Link>

            <Menu links={links} />
        </header>
    )
}

