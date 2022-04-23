import style from "./Main.module.css";
import logo from "../../assets/background .png";
import challengers from "../../assets/challengers.png";

import cmc from "../../assets/cmc.png";

import { Rightbtn, Leftbtn } from "../../components";
import { Container } from "react-bootstrap";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
//import { IoPaperPlaneOutline } from 'react-icons/io';


const Main = () => {
    return (

        <section className={style.main}>
            <div className={style.contract}>
                <p>Contract Address : 0xa531a733070a5fF4866D1327d82e403Fa35290A6</p>
            </div>
            <Container>
                <div className={style.main1}>
                    
                    <div className={style.catlogo}>
                    <img  src={logo} alt="catvills" />
                    </div>
                    <h1>CATVILLS COIN</h1>
                    <p>Catvills coin is community token driven on BSC Network projects and will bring our investor whenever they want. Catvills coin without community is nothing. our investor is king here.</p>
                    <div className={style.btns}>
                        <Leftbtn className={style.btn} name="Buy now" width="200px" height="40px"/>
                        <Rightbtn className={style.btn} name="Chart" width="200px" height="40px"/>
                    </div>
                    <div className={style.social}>
                        <a href="#"><FiFacebook className={style.link} /></a>
                        <a href="#"><FiTwitter className={style.link} /></a>
                        <a href="#"><FiInstagram className={style.link} /></a>
                        <a href="#"><AiOutlineMedium className={style.link} /></a>
                        {/*<IoPaperPlaneOutline className={style.link} />*/}



                    </div>
                    <div className={style.partner}>
                        <h5>Strategic Partners :</h5>
                        <img className={style.partnerimg} src={challengers} alt="challengers" />
                        <img className={style.partnerimg} src={cmc} alt="cryptomallu" />
                    </div>
                </div>
            </Container>
        </section>

    );

}
export default Main