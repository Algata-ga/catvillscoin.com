import { Container } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Rightbtn } from "../../components";
import logo from "../../assets/mainlogo.png";
import { useState } from "react";
import { Link } from "react-scroll";

import Whitepaper from "../../assets/catvillscoint_whitepaper.pdf";

const Navbar = () => {
    const [isActive, setActive] = useState(true);

    return (
        <nav className={style.header}>
            <Container className={style.nav}>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <div className={isActive ? style.close : style.open}>
                    <ul className={style.links}>
                        <li className={style.link}>
                            <Link
                                spy={false}
                                smooth={true}
                                onSetActive={() => setActive(false)}
                                offset={50}
                                duration={500}
                                delay={250}
                                isDynamic={true}
                                to="Graph"
                            >
                                Tokenomics
                            </Link>
                        </li>

                        <li className={style.link}>
                            <Link
                                spy={false}
                                smooth={true}
                                onSetActive={() => setActive(false)}
                                offset={50}
                                duration={500}
                                delay={250}
                                isDynamic={true}
                                to="Roadmap"
                            >
                                Roadmap
                            </Link>
                        </li>
                        <li className={style.link}>
                            <Link
                                spy={false}
                                smooth={true}
                                onSetActive={() => setActive(false)}
                                offset={50}
                                duration={500}
                                delay={250}
                                isDynamic={true}
                                to="Buy"
                            >
                                Buy
                            </Link>
                        </li>
                        <li className={style.link}>
                            <Link
                                spy={false}
                                smooth={true}
                                onSetActive={() => setActive(false)}
                                offset={50}
                                duration={500}
                                delay={250}
                                isDynamic={true}
                                to="Team"
                            >
                                Team
                            </Link>
                        </li>
                        <li className={style.link}>
                            <a href="https://stake.catvillscoin.com">Staking</a>
                        </li>
                        <li className={style.link}>
                            <Rightbtn
                                name="Whitepaper"
                                href={Whitepaper}
                                fileName="CatvillsCoin Whitepaper.pdf"
                            />
                        </li>
                    </ul>
                </div>
                <div className={style.hamburger}>
                    <button
                        className={isActive ? style.btn : style.active}
                        onClick={() => {
                            setActive(!isActive);
                        }}
                    >
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

