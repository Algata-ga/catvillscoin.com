import { Container } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Rightbtn } from "../../components";
import logo from "../../assets/mainlogo.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isActive, setActive] = useState(true);

    return (
        <nav className={style.header}>
            <Container className={style.nav}>
                <a href="#"><img src={logo} alt="logo" /></a>
                <div className={isActive ? style.close : style.open}>
                    <ul className={style.links}>
                        <li className={style.link}> <Link
                            spy={false}
                            smooth={true}
                            onSetActive={() => setNav(false)}
                            offset={50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Home"
                        >Home</Link></li>
                        <li className={style.link}> <Link
                            spy={false}
                            smooth={true}
                            onSetActive={() => setNav(false)}
                            offset={50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Graph"
                        >Tokenomics</Link></li>

                        <li className={style.link}> <Link
                            spy={false}
                            smooth={true}
                            onSetActive={() => setNav(false)}
                            offset={50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Roadmap"
                        >Roadmap</Link></li>
                        <li className={style.link}> <Link
                            spy={false}
                            smooth={true}
                            onSetActive={() => setNav(false)}
                            offset={50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Buy"
                        >Buy</Link></li>
                        <li className={style.link}> Staking</li>
                        <li className={style.link}><Rightbtn name="Whitepaper" /></li>

                    </ul>

                </div>
                <div className={style.hamburger}>
                    <button className={isActive ? style.btn : style.active} onClick={() => { setActive(!isActive) }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;