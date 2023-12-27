const fetchNews = async (url) => {
    //news api
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            console.log(data.articles);
            return data.articles
        }
        else {
            throw new Error(data.message || 'Failed to fetch news data')
        }
    }
    catch (error) {
        console.log(error);
        throw new Error('Failed to fetch news data')
    }
}

export default fetchNews;