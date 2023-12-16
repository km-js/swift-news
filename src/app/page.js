'use client'
import { useEffect, useState } from 'react';
import fetchNews from '../utils/fetchNews';
import Hero from './components/Hero';
import NewsList from './components/NewsList';
import { apiUrl } from '@/utils/constants';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        let newsData = await fetchNews(apiUrl);
        console.log(apiUrl)
        console.log(newsData)
        setNews(newsData);
      }
      catch (error) {
        console.error(error)
      }
    }
    getNews();
  }, [])

  return (
    <main>
      <Hero />
      <NewsList news={news} />
    </main>
  )
}

export default Home