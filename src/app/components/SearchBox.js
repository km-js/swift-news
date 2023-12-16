'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const SearchBox = () => {
    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search/${input}`)
    }

    return (
        <form
            className='max-w-5xl flex justify-between space-x-4 px-5 mb-8 mt-4 md:mt-[-30px] md:mx-auto'
            onSubmit={handleSearch}>
            <input className='flex-1 w-full h-10 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent border-b border-solid border-gray-500 dark:text-yellow-600 '
                placeholder="Search keywords..."
                type='text'
                onChange={(e) => setInput(e.target.value)} />
            <button
                className='text-yellow-500 disabled:text-gray-400'
                type='submit'
                disabled={!input}>Search</button>
        </form>
    )
}

export default SearchBox