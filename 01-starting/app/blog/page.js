import Link from 'next/link'

export default function BlogPage() {
    return (
        <>
            <h1>Blog Page</h1>
            <Link href="/blog/1">Blog 1</Link>
            <Link href="/blog/2">Blog 2</Link>
        </>
    )
}