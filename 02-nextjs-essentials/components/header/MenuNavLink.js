'use client';

import classes from '@/components/header/header.module.css'

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MenuNavLink({ title, href }) {
    const path = usePathname();
    return (
        <li>
            <Link href={href} className={(path == href) ? classes.active : ''} >{title}</Link>
        </li>
    )
}