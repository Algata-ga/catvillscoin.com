import style from "./Main.module.css";
import logo from "../../assets/background .png";
import challengers from "../../assets/challengers.png";

import cmc from "../../assets/cmc.png";

import { Rightbtn, Leftbtn,Centerbtn } from "../../components";
import { Container } from "react-bootstrap";
import {  AiOutlineTwitter } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Link } from "react-scroll";
import { useState } from "react";

const Main = () => {
    const [address,setAddress]=useState("0xa531a733070a5fF4866D1327d82e403Fa35290A6");
    return (
        <section className={style.main}>
            <div className={style.contract}>
                <p>
                    Contract Address :&nbsp;
                    <CopyToClipboard onCopy={() => {setAddress("Copied!");setTimeout(()=>setAddress("0xa531a733070a5fF4866D1327d82e403Fa35290A6"),1000);}}>
                        <span className={style.span}>{address}</span>
                    </CopyToClipboard>
                </p>
            </div>
            <Container>
                <div className={style.main1}>
                    <div className={style.catlogo}>
                        <img src={logo} alt="catvills" />
                    </div>
                    <h1>CATVILLS COIN</h1>
                    <p>
                        Catvills coin is community token driven on BSC Network
                        projects and will bring our investor whenever they want.
                        Catvills coin without community is nothing. Our investor
                        is king here.
                    </p>
                    <div className={style.btns}>
                        <a href="https://pancakeswap.finance/swap?outputCurrency=0xa531a733070a5fF4866D1327d82e403Fa35290A6">
                            <Leftbtn
                                className={style.btn}
                                name="Buy Now"
                                width="125px"
                                height="40px"
                            />
                        </a>
                        <a href="https://stake.catvillscoin.com/">
                            <Centerbtn 
                            className={style.btn}
                            name="Stake"
                            width="100px"
                            height="40px"/>
                        </a>

                        <a href="https://www.dextools.io/app/bsc/pair-explorer/0xd47f7b9452db24a2be284cd9820e59f656888c7d">
                            <Rightbtn
                                className={style.btn}
                                name="Chart"
                                width="125px"
                                height="40px"
                            />
                        </a>
                    </div>
                    <div className={style.social}>
                        <a href="https://twitter.com/catvillscoin ">
                           
                            <AiOutlineTwitter className={style.link} />
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
                    <div className={style.partner}>
                        <h5>Strategic Partners :</h5>
                        <a href="https://cryptochallengers.org">
                            <img
                                className={style.partnerimg}
                                src={challengers}
                                alt="challengers"
                            />
                        </a>
                        <a href="https://cryptomalluclub.in">
                            <img
                                className={style.partnerimg}
                                src={cmc}
                                alt="cryptomallu"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default Main;

