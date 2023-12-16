import fetchNews from "@/utils/fetchNews"
import { searchUrl } from "@/utils/constants"
import NewsList from "../../components/NewsList"

const SearchPage = async ({ params }) => {
    const news = await fetchNews(searchUrl + params.query)
    return (
        <div>
            <h1 className="font-bold text-2xl underline decoration-yellow-600 underline-offset-8 p-4 capitalize">Search Results for: {params.query}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default SearchPage