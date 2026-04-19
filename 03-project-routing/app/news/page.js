import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
    return (
        <>
            <h1>NewsPage</h1>
            <NewsList list={DUMMY_NEWS} />
        </>
    )
}