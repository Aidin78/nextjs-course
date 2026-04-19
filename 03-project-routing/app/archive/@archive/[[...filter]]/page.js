import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function FilteredNewsPage({ params }) {
    const filter = params.filter ?? [];
    const selectedYear = filter[0];
    const selectedMonth = filter[1];

    //Validation for params
    if (filter.length > 2) throw new Error("Invalid filters");
    if (selectedYear && !/^\d{4}$/.test(selectedYear)) throw new Error("Invalid year filter");
    if (selectedMonth && (Number(selectedMonth) < 1 || Number(selectedMonth) > 12)) throw new Error("Invalid month filter");

    let news = [], newsContent, links = [];

    if (!selectedYear && !selectedMonth) {
        links = getAvailableNewsYears(selectedYear)
    }
    else if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear)
    }
    else if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    }
    else notFound();

    if (!selectedYear && !selectedMonth) newsContent = (<p>Select year filter for news list</p>)
    else
        newsContent = ((news && news.length > 0) || (!selectedYear && !selectedMonth)) ? <NewsList list={news} /> : (<p>There is no news for selected filters</p>)

    return (
        <>
            <header id="archive-header">
                <ul>
                    {links && links.reverse().map(item => {
                        const href = (selectedYear ? `/archive/${selectedYear}/${item}` : `/archive/${item}`);
                        return (<li key={item}>
                            <Link href={href}>{item}</Link>
                        </li>)
                    }
                    )}
                </ul>
            </header>
            {newsContent}
        </>
    )

}