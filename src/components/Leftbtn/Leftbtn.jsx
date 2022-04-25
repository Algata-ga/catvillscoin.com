import style from "./Leftbtn.module.css"
const Leftbtn = (props) => {

    return (
        <>
        <button className={style.leftbtn}  style={{width:props.width,height:props.height}}>{props.name}</button>
        </>
    );
};

export default Leftbtn;