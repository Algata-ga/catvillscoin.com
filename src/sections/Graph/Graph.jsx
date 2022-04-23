import { Container } from "react-bootstrap";
import { Heading, Line } from "../../components";
import style from "./Graph.module.css";
import graph from "../../assets/graph.png";


const Graph = () =>{
    return(
        <section className={style.graph}>
            <Container className={style.graphcontainer}>
                <Heading heading="Current Distribution Of " change="Tokens"/>
                <img className={style.img} src={graph} alt="" />
                <h2 className={style.h2}>1,000,000,000,000,000</h2>
                <Heading heading="Total Supply"/>
                <p className={style.p}>The liquidity is locked, the development team gives up the admin rights of the contract, The team does not have any tokens this is a community owned coin.</p>
                <Line/>
            </Container>
        </section>
    );
}

export default Graph;