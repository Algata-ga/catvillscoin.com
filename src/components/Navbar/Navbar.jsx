import { Container } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Rightbtn } from "../../components";
import logo from "../../assets/mainlogo.png";
import { useState } from "react";

const Navbar = () => {
    const [isActive, setActive] = useState(true);

    return (
        <nav className={style.header}>
            <Container className={style.nav}>
                <a href="#"><img src={logo} alt="logo" /></a>
                <div className={isActive ? style.close : style.open}>
                    <ul className={style.links}>
                        <li className={style.link}>Home</li>
                        <li className={style.link}>Tokenomics</li>

                        <li className={style.link}>Roadmap</li>
                        <li className={style.link}>Buy</li>
                        <li className={style.link}>Staking</li>
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