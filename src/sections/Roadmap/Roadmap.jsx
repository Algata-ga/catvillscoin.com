import { Container } from "react-bootstrap";
import { Heading, Line } from "../../components";
import style from "./Roadmap.module.css";

const Roadmap = () => {
    return (
        <section className={style.roadmap}>
            <Container className={style.roadmapcontainer}>
                <Heading heading="Road " change="Map" />
                <section className={style.timeline}>
                    <ul>
                        <li>
                            <div className={style.content+' '+style.colored}>
                                <h3>Launch Phase</h3>
                                    <h6>Website Launch ✅</h6>
                                    <h6>Contract Deployment ✅</h6>
                                    <h6>DEX hosting ✅</h6>
                                    <h6> 1,000 Holders</h6>
                            </div>
                        </li>

                        <li>
                            <div className={style.content}>
                                <h3>Growth Phase</h3>
                                <h6>5000 Holders </h6>
                                <h6>Influencer Promotions </h6>
                                <h6> Catvillscoin stake launch</h6>
                                <h6> Coingecko Listing </h6>
                                <h6> Coinmarketcap Listing </h6>


                            </div>

                        </li>
                        <li>
                            <div className={style.content}>
                                <h3>Expansion Phase</h3>
                                <h6> 20000 Holders</h6>
                                <h6> Catvills swap</h6>
                            </div>
                        </li>
                        <li>
                            <div className={style.content}>
                                <h3>Exchange Phase</h3>
                                <h6> 35000 Holders</h6>
                                <h6> CEX listing</h6>
                                <h6> Media Coverage Campaigns</h6>
                                <h6> 50000 Holders</h6>
                                <h6> DEX Integration in dApp wallet</h6>
                                <h6> Major CEX listings</h6>


                            </div>
                        </li>
                        <div style={{ clear: "both" }}></div>
                    </ul>
                </section>
                <Line />
            </Container>
        </section>
    );
}

export default Roadmap;