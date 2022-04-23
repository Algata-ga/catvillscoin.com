import { Heading, Line } from "../../components";
import style from "./Latest.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Container } from "react-bootstrap";


const logo = "https://picsum.photos/300/200";
const medium = [
    {
        "name": 'A',
        "image_url": logo,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',
        "id": 0,
    },
    {
        "name": 'B',
        "image_url": logo,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 1,
    }, {
        "name": 'C',
        "image_url": logo,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 2,
    }, {
        "name": 'D',
        "image_url": logo,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 3,
    }, {
        "name": 'E',
        "image_url": logo,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 4,
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
                            <SwiperSlide key={item.id} className={style.swiperslide}     >
                                <div className={style.imgbox}>
                                    <img src={item.image_url} />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
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