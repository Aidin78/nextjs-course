import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestPage() {
    const news = getLatestNews();
    return (
        <>
            <h2>Latest News Page</h2>
            <NewsList list={news} />
        </>
    )
}