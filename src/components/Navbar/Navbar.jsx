import { Container } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Rightbtn } from "../../components";
import logo from "../../assets/mainlogo.png";
import { useState } from "react";

const Navbar = () => {
        const [isActive, setActive] = useState(false);
       
    return (
        <nav className={style.header}>
            <Container className={style.nav}>
                <a href="#"><img src={logo} alt="logo" /></a>
                <div className={isActive ? style.linkbox : style.open}>
                    <ul className={style.links}>
                        <li className={style.link}>Home</li>
                        <li className={style.link}>Tokenomics</li>

                        <li className={style.link}>Roadmap</li>
                        <li className={style.link}>Buy</li>
                        <li className={style.link}>Staking</li>
                    <li className={style.link}><Rightbtn name="Whitepaper"/></li>

                    </ul>
                    
                </div>
                <div className={style.hamburger}>
                        <button onClick={()=>{setActive(!isActive)}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAXVBMVEX///8AAADd3d0nJyfl5eWEhIQeHh4jIyO2tra/v7/19fU/Pz+qqqrv7+/4+PgODg7W1tZ2dnZGRkaUlJTFxcWMjIxUVFRmZmY3NzfNzc2kpKSdnZ18fHwuLi5aWlqI+a8hAAAB6UlEQVR4nO3c65KCMAyGYVRcVEBBPCAe7v8yV3T2105S/iXR97mCb5hSStskywAAAAAAAAAAAMKq87kreT0xeFO1++LHkWLfVs2UJ96VM4fKLvnkc5fBR2WuJ59bB9TM1dFinU6njZnWOpyulZMfFtbhdIuDGP1onS3lKL6jJ+toKSfpTfU+XpQRs7JOlrYiugEp+sX/WL8I0fOHdbSUh7iOuVlHS1lKybN1YZ1NV6zF6NnZOpzuLCfPNr11Ok2/UaJnF8fZe2l6+cvudh1zSiR//m04XT4ep+wKbLvyvnDlvu+2E4K/0+euTM4NAAAAAAC+Ut0MS1eGZtqtkvl1Z73T9d/uql4QeNlWTjdM+yq1kXRz+MjfdrdEcuuAGjW78+NH6ejxqXZ7BemtlCeawTpbyiAl3zi/yTObtdJpUuN8vDxHjHRncG2dLE06OHU+v4w+8GZG4AET+DUNPDkG/iRFXgh4n2OU5VfkRW/kX43IP3iBf6tHYTczAAAAAADAt4paZuKwuKecVNwTt6QqbiFb3PLBwEWbcUtlAxcouz6OGYll4YGL8QO3QHB+9Dj6wJsZgaMHbm0TuKFQ4DZO7keM0jwrcMuyyI3iArfni9wUMXIryixwA9DXk4/adhUAAAAAAAAAAMChX1E1TS4PJ0+wAAAAAElFTkSuQmCC" alt="" /></button>
                    </div>
            </Container>
        </nav>
    );
};

export default Navbar;