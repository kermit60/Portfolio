import { links } from '../data';

const Nav = () => {
  return (
    <nav className='z-10 mx-auto flex sticky justify-between items-center 
                    px-2 sm:px-7 md:px-20 xl:px-56 h-14 top-0 gap-16 
                    backdrop-blur-md border-b text-gray-950'>
      <h2 className=' text-base'>
        Kermit Liu
      </h2>
      
      <div className='flex gap-x-3'>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className='capitalize duration-200 hover:text-emerald-600 text-[13px]'
            >
              {text}
            </a>
          )
        })}
      </div>
    </nav>
  );
}


export default Nav;