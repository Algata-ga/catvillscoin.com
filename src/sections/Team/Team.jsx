import { Container } from "react-bootstrap";
import { Heading, Modal } from "../../components";
import style from "./Team.module.css";
import owner from "../../assets/owner.jpg";
import director from "../../assets/director.jpg";
import dev from "../../assets/dev.jpg";
import pr from "../../assets/pr.jpg";
import marketer from "../../assets/marketer.jpg";
import { AiOutlineClose } from 'react-icons/ai';

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const teams = [
    {
        name: "Gerrad Salva",
        image_url: owner,
        designation: "Owner",
        bio: "I'm Gerard Salva owner of Catvills Project &  bussiness, export frozen fish to Fuzho Chinese Actually the beginning why I want to make my cat project, Because I'm bored and often lose buying other tokens that loose their value in the future. That's why I made catvills coin , and my project is for the long term. Where are we all going in the hands of investors, to what extent do we support you, I hope we can get to the Binance market. The community is king here, I will only provide the best service and security for your investment in Catvills Coin. Whatever this project lacks, let's fix it together. I will always prioritize your suggestions. The point is that everything is for the trust of Catvills coin investors, we will continue to grow together.",
    },
    {
        name: "Saqlain Haider",
        image_url: director,
        designation: "Director",
        bio: "Saqlain Haider is a student at Bahauddin Zakariya University Multan Punjab Pakistan in the field of Physics. To gain knowledge & achieve goals in the field of science & technology always remain his passion. He is a young Entrepreneur as well as trader and investor in the field of Crypto and other organizations at the age of 22 years. He Joined with the Catvills Project in April  2022 when the project was at his early stage. He always loved to work with the Catvills Project honourable team. He developed a strong relation with Biljo (a team member) & whole community. His dedications are with the team & his efforts are towards the Success of the Project.",

    },
    {
        name: "Biljo",
        image_url: marketer,
        designation: "Managing Director",
        bio: "Aviation graduate Worked as community manager and adviser for various projects ..He is a selfmade entrepreneur.Currently Work for catvills as managing director",

    },
    {
        name: "Fitre Agustin",
        image_url: pr,
        designation: "Marketing",
        bio: "content marketing professional at local crypto services, an inbound marketing and sales platform that helps project attract visitors, convert leads, and close customers.",

    },
    {
        name: "Nizar",
        image_url: dev,
        designation: "Software Developer",
        bio: "Solidity and software developer with 10 years experiences in development.",

    },
    
];

const Team = () => {
    const [curMember, setCurMember] = useState(null);
    return (
        <section className={style.team}>
            <Container className={style.teamcontainer}>
                <Heading heading="About " change="Catvills & Team" />
                <p className={style.p}>
                    Cat Vills Coin or $CATVILLS is not a registered digital
                    currency and does not count as an investment. DeFi tokens
                    are not regulated, always make sure you swap what you can
                    afford to lose. Team CATVILLS are not liable for any
                    financial loss you may incur nor are we responsible for any
                    gains you make.
                </p>

                <Swiper
                    className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                >
                    {teams.map((item, index) => (
                        <SwiperSlide key={item.name} style={{ border: "none" }}>
                            <div
                                className={style.box}
                                onClick={() => setCurMember(index)}
                            >
                                <div className={style.imgbox}>
                                    <img src={item.image_url} alt="" />
                                </div>
                                <h4>{item.name}</h4>
                                <h6>{item.designation}</h6>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {curMember != null && (
                    <Modal>
                        <div className={style.modalcontainer}>
                            <img src={teams[curMember].image_url} />
                            <h2>{teams[curMember].name}</h2>
                            <h4>{teams[curMember].designation}</h4>
                            <h6>{teams[curMember].bio}</h6>
                            <button className={style.close} onClick={() => setCurMember(null)}>
                                <AiOutlineClose />
                            </button>
                        </div>
                    </Modal>
                )}
            </Container>
        </section>
    );
};

export default Team;

