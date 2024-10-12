import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './index.css'

const App = () => {
  return (
    <div className=" bg-slate-50 backdrop-blur-md ">
      <Nav></Nav>
      <Intro />
      <Projects/>
      <Footer />
    </div>
  )
}

export default App;