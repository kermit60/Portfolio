import { links } from '../data';

const Nav = () => {
  return (
    <nav className='mx-auto flex sticky justify-between items-center gap-16 px-9
                   text-gray-950  h-14 top-0 backdrop-blur-md border-b'>
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