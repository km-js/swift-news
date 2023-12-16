import { searchUrl } from "@/utils/constants"
import fetchNews from "@/utils/fetchNews"
import NewsList from "../../components/NewsList"

const NewsCategory = async ({ params }) => {
    const news = await fetchNews(searchUrl + params.category)
    return (
        <div>
            <h1 className="font-bold text-2xl underline decoration-yellow-600 underline-offset-8 p-4 capitalize">{params.category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory