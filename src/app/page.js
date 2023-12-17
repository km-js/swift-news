import fetchNews from '../utils/fetchNews';
import Hero from './components/Hero';
import NewsList from './components/NewsList';
import { apiUrl } from '@/utils/constants';

async function Home() {
  const news = await fetchNews(apiUrl)

  return (
    <main>
      <Hero />
      <NewsList news={news} />
    </main>
  )
}

export default Home