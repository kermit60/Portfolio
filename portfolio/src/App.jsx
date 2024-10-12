import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import './index.css'

const App = () => {
  return (
    <div className=" bg-slate-50 backdrop-blur-md ">
      <Nav></Nav>
      <Intro />
      <Projects/>
      <div className="h-96 w-80 flicker-animation ">
        <h1 className="text-orange-500 text-center text-lg"> HELLO MY KING</h1>
      </div>
    
    </div>
  )
}

export default App;