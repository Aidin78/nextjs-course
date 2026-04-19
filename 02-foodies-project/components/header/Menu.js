import classes from '@/components/header/header.module.css'
import MenuNavLink from '@/components/header/MenuNavLink'

export default function Menu({links}) {
    return (
        <nav className={classes.nav}>
            <ul>
                {links.length > 0 && links.map((link, index) => {
                    return <MenuNavLink key={index} title={link.title} href={link.href} />
                })}
            </ul>
        </nav>
    )
}