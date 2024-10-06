import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' }
];

export const skills = [
  {
    id: nanoid(),
    skill: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    description: 'Highly skilled in HTML & CSS, making appealing and responsive websites for optimal user experience.',
  },
  {
    id: nanoid(),
    skill: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    description: 'Highly skilled in HTML & CSS, making appealing and responsive websites for optimal user experience.',
  },
  {
    id: nanoid(),
    skill: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    description: 'Highly skilled in HTML & CSS, making appealing and responsive websites for optimal user experience.',
  }
]


export const projects = [
  {
    id: nanoid(),
    img: './assets/react.svg',
    url: 'https://github.com/kermit60/Portfolio',
    github: 'https://github.com/kermit60/Portfolio',
    title: 'some project',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quas molestias quia dolore corrupti amet, delectus alias explicabo exercitationem quisquam quibusdam optio dolorem perspiciatis inventore! Repellendus iste molestiae deleniti aliquam.'
  },
  {
    id: nanoid(),
    img: './assets/react.svg',
    url: 'https://github.com/kermit60/Portfolio',
    github: 'https://github.com/kermit60/Portfolio',
    title: 'some project',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quas molestias quia dolore corrupti amet, delectus alias explicabo exercitationem quisquam quibusdam optio dolorem perspiciatis inventore! Repellendus iste molestiae deleniti aliquam.'
  },
  {
    id: nanoid(),
    img: './assets/react.svg',
    url: 'https://github.com/kermit60/Portfolio',
    github: 'https://github.com/kermit60/Portfolio',
    title: 'some project',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quas molestias quia dolore corrupti amet, delectus alias explicabo exercitationem quisquam quibusdam optio dolorem perspiciatis inventore! Repellendus iste molestiae deleniti aliquam.'
  },
  {
    id: nanoid(),
    img: './assets/react.svg',
    url: 'https://github.com/kermit60/Portfolio',
    github: 'https://github.com/kermit60/Portfolio',
    title: 'some project',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quas molestias quia dolore corrupti amet, delectus alias explicabo exercitationem quisquam quibusdam optio dolorem perspiciatis inventore! Repellendus iste molestiae deleniti aliquam.'
  }
]


