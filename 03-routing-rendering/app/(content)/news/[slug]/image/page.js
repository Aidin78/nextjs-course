import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(item => item.slug == newsItemSlug);

    if (!newsItem) notFound();

    return (<div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} style={{ maxWidth: '100%' }} />

    </div>)
}