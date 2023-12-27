import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
export const categories = [
  'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
]

const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname?.split('/').pop() === path;
  }
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 leading-[0] text-xs md:text-sm gap-4 md:pb-10 max-w-6xl mx-auto mt-4'>
      {categories.map(category =>
        <NavLink key={category} category={category} isActive={isActive(category)} />
      )}
    </nav>
  )
}

export default NavLinks