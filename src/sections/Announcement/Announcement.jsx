import style from "./Announcement.module.css";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/b2.jpg";
import banner4 from "../../assets/photo_2022-06-09_23-54-23.jpg";
import { Heading, Line } from "../../components";

const Announcement = () => {
    return (
        <>
            <section className={style.announcement}>
                <Line />

                <Container className={style.announcont}>
                    <Heading heading="Announcements" />
                    <Carousel
                        fade
                        className={style.carousel}
                        controls={false}
                        indicators={false}
                    >
                        <Carousel.Item
                            className={style.carouselitem}
                            interval={2000}
                        >
                            <div className={style.imgbox}>
                                <img
                                    className={
                                        "d-block w-100" + " " + style.img
                                    }
                                    src={banner1}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item
                            className={style.carouselitem}
                            interval={2000}
                        >
                            <div className={style.imgbox}>
                                <img
                                    className={
                                        "d-block w-100" + " " + style.img
                                    }
                                    src={banner3}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item
                            className={style.carouselitem}
                            interval={2000}
                        >
                            <div className={style.imgbox}>
                                <img
                                    className={
                                        "d-block w-100" + " " + style.img
                                    }
                                    src={banner2}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item
                            className={style.carouselitem}
                            interval={2000}
                        >
                            <div className={style.imgbox}>
                                <img
                                    className={
                                        "d-block w-100" + " " + style.img
                                    }
                                    src={banner4}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <Line />
                </Container>
            </section>
        </>
    );
};
export default Announcement;
