import Line from "../Line/Line";
import style from "./Footer.module.css";
import logo from "../../assets/mainlogo.png";
import { Container } from "react-bootstrap";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
const date = new Date();
        const year = date.getFullYear();
const Footer = () => {

    return (
        <>
        
        <section className={style.footer}>
        <Line />
            <div className={style.footerbox}>
            <div className={style.imgbox}>
                <img src={logo} alt="logo" />
            </div>
            <div className={style.copy}>
            <div className={style.copyright}>
                <h6> Copyright	© {year}.  Catvillscoin.</h6>
            </div>
            </div>
            <div className={style.links}>
                        <a href="#"><FiFacebook className={style.link} /></a>
                        <a href="#"><FiTwitter className={style.link} /></a>
                        <a href="#"><FiInstagram className={style.link} /></a>
                        <a href="#"><AiOutlineMedium className={style.link} /></a>
                        {/*<IoPaperPlaneOutline className={style.link} />*/}
            </div>
            </div>
        </section>
        </>

    );
};

export default Footer;