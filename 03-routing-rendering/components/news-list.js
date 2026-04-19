import Link from 'next/link'

export default function NewsList({ list }) {
    return (
        <ul className="news-list">
            {list && list.map((news) => (
                <li>
                    <Link href={'/news/' + news.slug}>
                        <img src={`/images/news/${news.image}`}
                            alt={news.title} />
                        <span>
                            {news.title}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}