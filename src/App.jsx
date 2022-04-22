import { Footer, Navbar } from "./components";
import { Main,Announcement, Graph, Roadmap, Buy, Latest, Team } from "./sections";
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
      <Buy />
      <Latest />
      <Team />
      <Footer />
    </>
  )
}

export default App
