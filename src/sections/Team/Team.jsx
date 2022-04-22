import { Container } from "react-bootstrap";
import { Heading, } from "../../components";
import style from "./Team.module.css";
import team1 from "../../assets/team1.png"

const Team = () => {
    return (
        <section className={style.team}>
            <Container className={style.teamcontainer}>
                <Heading heading="About " change="Catvills & Team" />
                <p className={style.p}>Cat Vills Coin or $CATVILLS is not a registered digital currency and does not count as an investment. DeFi tokens are not regulated, always make sure you swap what you can afford to lose. Team CATVILLS are not liable for any financial loss you may incur nor are we responsible for any gains you make.</p>
                <div className={style.boxcontainer}>
                    <div className={style.box}>
                        <div className={style.imgbox}>
                            <img src={team1} alt="" />
                        </div>
                        <h4>Franklin Dermerus</h4>
                        <h6>Ceo,Catvills</h6>

                    </div>
                    <div className={style.box}>
                        <div className={style.imgbox}>
                            <img src={team1} alt="" />
                        </div>
                        <h4>Franklin Dermerus</h4>
                        <h6>Ceo,Catvills</h6>
                    </div>
                    <div className={style.box}>
                        <div className={style.imgbox}>
                            <img src={team1} alt="" />
                        </div>
                        <h4>Franklin Dermerus</h4>
                        <h6>Ceo,Catvills</h6>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Team;