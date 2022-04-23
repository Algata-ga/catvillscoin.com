import style from "./Leftbtn.module.css"
const Leftbtn = (props) => {

    return (
        <>
        <a href="#"><button className={style.leftbtn}  style={{width:props.width,height:props.height}}>{props.name}</button></a>
        </>
    );
};

export default Leftbtn;