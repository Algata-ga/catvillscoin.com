import { Footer, Navbar } from "./components";
import {
    Main,
    Announcement,
    Graph,
    Roadmap,
    Buy,
    Latest,
    Team,
} from "./sections";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";

function App() {
    return (
        <>
            <Element name="Home">
                <Navbar />
                <Main />
            </Element>
            <Announcement />
            <Element name="Graph">
                <Graph />
            </Element>

            <Element name="Roadmap">
                <Roadmap />
            </Element>
            <Element name="Buy">
                <Buy />
            </Element>
            <Latest />
            <Element name="Team">
                <Team />
            </Element>

            <Footer />
        </>
    );
}

export default App;
