import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import project1 from './assets/macbook.png';
import project2 from './assets/ipad.png';
import project3 from './assets/phone.png';
export const links = [ 
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' }
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
    skill: 'Javascript',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    description: 'Highly skilled in HTML & CSS, making appealing and responsive websites for optimal user experience.',
  },
  {
    id: nanoid(),
    skill: 'React',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    description: 'Highly skilled in HTML & CSS, making appealing and responsive websites for optimal user experience.',
  }
]


export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: 'https://kermit60.github.io/todo-list/',
    github: 'https://github.com/kermit60/todo-list/',
    title: 'ToDoList',
    build: 'Built with Javascript, HTML and CSS',
    description: 'A simple task management tool that allows users to create/delete projects, tasks and allows for easy filtering.'
  },
  {
    id: nanoid(),
    img: project2,
    url: 'https://kermit60.github.io/weather-app/',
    github: 'https://github.com/kermit60/weather-app',
    title: 'Weather App',
    build: 'Built with Javascript, HTML and CSS',
    description: "A Weather forecast application that's a simple website that displays your location's weather built with Javascript, HTML, and CSS."
  },
  {
    id: nanoid(),
    img: project3,
    url: 'https://kermit60.github.io/tic-tac-toe/',
    github: 'https://github.com/kermit60/tic-tac-toe',
    title: 'TicTacToe game',
    build: 'Built with Javascript, HTML and CSS',
    description: 'Play the classic game of Tic Tac Toe with two players!'
  },
]


