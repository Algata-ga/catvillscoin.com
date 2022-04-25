import { Container } from "react-bootstrap";
import { Heading, Line } from "../../components";
import style from "./Buy.module.css";

const Buy = () => {
    return (
        <section className={style.buy}>
            <Container className={style.buycontainer}>
                <Heading heading="How To " change="Buy" />
                <h5 className={style.sub}>Pancake Swap Step-by-Step</h5>
                <div className={style.box}>
                    <ul>
                        <li><h3>1</h3>
                            <div>
                                <h5>Pancake Swap Step-by-Step</h5>
                                <p>Download the MetaMask extension and create a wallet. Then proceed to fund your wallet with BNB. Make sure you have enough for gas fees.</p>
                            </div></li>

                        <li>
                            <h3>2</h3>
                            <div>
                                <h5>Connect your wallet</h5>
                                <p>Visit Pancake Swap and connect your wallet to the dApp. Make sure you are connecting to the correct url as pankeswap.finance.</p>
                            </div>
                        </li>
                        <li>
                            <h3>3</h3>
                            <div>
                                <h5>Import the Cat Vills contract</h5>
                                <p>In order to swap Cat Vills you will need to add the contract to your wallet, simply click 'add token' to your wallet and copy and paste the Cat Vills contract, then press 'import'.</p>
                            </div>
                        </li>

                        <li>
                            <h3>4</h3>
                            <div>
                                <h5>Swap BNB for Cat Vills Coin </h5>
                                <p>After you have imported, simply press 'select token', select Cat Vills and then enter the amount of BNB you would like to swap for.</p>
                            </div >
                        </li >
                    </ul >

                </div >
                <Line />
            </Container >
        </section >
    );
}
export default Buy;