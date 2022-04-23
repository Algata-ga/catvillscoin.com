import { Container } from "react-bootstrap";
import { Heading, } from "../../components";
import style from "./Team.module.css";
import team1 from "../../assets/team1.png"

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


const teams = [
    {
        "name": 'A',
        "image_url": team1,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',
        "id": 0,
    },
    {
        "name": 'B',
        "image_url": team1,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 1,
    }, {
        "name": 'C',
        "image_url": team1,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 2,
    }, {
        "name": 'D',
        "image_url": team1,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 3,
    }, {
        "name": 'E',
        "image_url": team1,
        "title": 'hello there',
        "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 4,
    }
];

const Team = () => {
    return (
        <section className={style.team}>
            <Container className={style.teamcontainer}>
                <Heading heading="About " change="Catvills & Team" />
                <p className={style.p}>Cat Vills Coin or $CATVILLS is not a registered digital currency and does not count as an investment. DeFi tokens are not regulated, always make sure you swap what you can afford to lose. Team CATVILLS are not liable for any financial loss you may incur nor are we responsible for any gains you make.</p>

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
                    {teams.map((item) =>
                        <SwiperSlide key={item.id}   style={{border:"none"}}   >
                                <div className={style.box}>
                                    <div className={style.imgbox}>
                                        <img src={item.image_url} alt="" />
                                    </div>
                                    <h4>Franklin Dermerus</h4>
                                    <h6>Ceo,Catvills</h6>

                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>

            </Container>
        </section>
    );
}

export default Team;