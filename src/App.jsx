import { Navbar } from "./components";
import { Main,Announcement, Graph, Roadmap } from "./sections";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Announcement />
      <Graph />
      <Roadmap />
    </>
  )
}

export default App
