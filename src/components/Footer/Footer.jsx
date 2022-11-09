import Line from "../Line/Line";
import style from "./Footer.module.css";
import logo from "../../assets/mainlogo.png";
import { Container } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si"
const date = new Date();
const year = date.getFullYear();
const Footer = () => {

    return (
        <>

            <section className={style.footer}>
                <Line style={{ paddingTop: "none" }} />
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
                        <a href="https://twitter.com/catvillscoin ">

                            <AiOutlineTwitter className={style.link} />
                        </a>
                        <a href="mailto:info@catvillscoin.com">
                            <SiGmail className={style.link} />
                        </a>
                        <a href=" https://discord.gg/cD9KFhvqtR">
                            <FaDiscord className={style.link} />
                        </a>
                        <a href="https://telegram.me/+LV6E7-Pi5vo1NGE9">
                            <RiSendPlaneFill className={style.link} />
                        </a>
                        <a href="https://catvillscoin.eth">
                            <FaEthereum className={style.link} />
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Footer;