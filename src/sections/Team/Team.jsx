import { Container } from "react-bootstrap";
import { Heading, Modal } from "../../components";
import style from "./Team.module.css";
import owner from "../../assets/owner.jpg";
import director from "../../assets/director.jpg";
import dev from "../../assets/dev.jpg";
import pr from "../../assets/pr.jpg";
import marketer from "../../assets/marketer.jpg";

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
        id: 0,
    },
    {
        name: "Fitre Agustin",
        image_url: pr,
        designation: "Marketing",

        id: 1,
    },
    {
        name: "Nizar",
        image_url: dev,
        designation: "IT",

        id: 2,
    },
    {
        name: "Saqlain Haider",
        image_url: director,
        designation: "Director",

        id: 3,
    },
    {
        name: "Biljo",
        image_url: marketer,
        designation: "Blank",

        id: 4,
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
                        <SwiperSlide key={item.id} style={{ border: "none" }}>
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
            </Container>
            {curMember != null && (
                <Modal>
                    <div>
                        <h1>{teams[curMember].name}</h1>
                        <img src={teams[curMember].image_url} />
                        <p>{teams[curMember].designation}</p>
                        <button onClick={() => setCurMember(null)}>
                            CLOSE ME
                        </button>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Team;

