import Link from 'next/link';

const NavLink = ({ category, isActive }) => {
  return (
    <Link className={`hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 capitalize cursor-pointer hover:font-bold hover:scale-110 transition-transform duration-200 ease-out ${isActive && 'underline decoration-orange-400 underline-offset-4 '}`} href={`/news/${category}`}>
      {category}
    </Link>
  )
}

export default NavLink