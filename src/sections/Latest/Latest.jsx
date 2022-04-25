import { Heading, Line } from "../../components";
import style from "./Latest.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Container } from "react-bootstrap";

import EaglesX0 from '../../assets/eaglesxAMA_0.png';

const medium = [
    {
        "image_url": EaglesX0,
        "title": 'Crypto Eagles X Catvills Coin',
        "link": ' https://link.medium.com/wNk20f4capb',
    },
    {
        "image_url": 'https://cdn-images-1.medium.com/max/1024/1*f09fMttTQV6H1UVo2xqQrQ.jpeg',
        "title": 'Cryptochallengers X Catvills Coin',
        "link":'https://medium.com/@cryptochallengers/ama-recap-crypto-challengers-x-catville-venue-cryptochallengersd-date-12-apr-2022-time-1a510462d9a',
    }
];

const Latest = () => {
    return (
        <section className={style.latest}>
            <Container>

                <div className={style.contain}>

                    <Heading heading="Latest " change="Activity" />
                    <Swiper className={style.swiper + " " + "mySwiper"}
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
                        {medium.map((item) =>
                            <SwiperSlide key={item.id}      >
                                <a href={item.link}>
                                <div className={style.swiperslide}>
                                    <div className={style.imgbox}>
                                        <img src={item.image_url} />
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </div>
                                </a>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <Line />
            </Container>
        </section>
    );
}

export default Latest;