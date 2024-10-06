import { links } from '../data';

const Nav = () => {
  return (
    <nav className='bg-stone-900 text-gray-100 sticky rounded-lg opacity-8 top-0 max-w-3xl'>
      <div className=' px-8 py-4 flex flex-col sm:gap-x-16 sm:items-center sm:py-6'>
        <h2 className='text-2xl font-bold'>
          KERMIT
          <span className='text-emerald-500'> LIU</span>
        </h2>
        <div className='flex gap-x-3 text-gray-100'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-200'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}


export default Nav;