import Link from 'next/link'

const Article = ({ article }) => {
    return (
        <article className='bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:bg-slate-200 transition-all duration-200 ease-out'>
            {article.urlToImage && (
                <img
                    className='h-56 w-full object-cover rounded-t-lg shadow-md'
                    src={article.urlToImage}
                    alt={article.title} />
            )}

            <div className='flex-1 flex flex-col '>
                <div className='flex-1 flex flex-col p-5'>
                    <h1 className='font-bold'>{article.title}</h1>
                    <section className='mt-2 flex-1'>
                        <p className='text-xs line-clamp-4'>{article.description}</p>
                    </section>

                    <footer className='text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400'>
                        <p>{article.source.name} -</p>
                        <p>{article.publishedAt}</p>
                    </footer>

                    <Link
                        className="bg-yellow-600 h-10 rounded-b-lg dark:text-gray-900 hover:bg-yellow-700 text-center py-2 mt-2"
                        href={article.url}
                        target='_blank'>
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Article