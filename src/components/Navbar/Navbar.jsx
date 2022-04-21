import { Container } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Rightbtn } from "../../components";
import logo from "../../assets/mainlogo.png"

const Navbar = () => {

    return (
        <nav className={style.header}>
            <Container className={style.nav}>
                <a href="#"><img src={logo} alt="logo" /></a>
                <div className={style.linkbox}>
                    <ul className={style.links}>
                        <li className={style.link}>Home</li>
                        <li className={style.link}>Tokenomics</li>

                        <li className={style.link}>Roadmap</li>
                        <li className={style.link}>Buy</li>
                        <li className={style.link}>Staking</li>
                    <li className={style.link}><Rightbtn name="Whitepaper"/></li>

                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;