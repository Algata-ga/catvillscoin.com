import style from "./Rightbtn.module.css"
const Rightbtn = (props) => {

    return (
        <>
        <button className={style.rightbtn} style={{width:props.width,height:props.height}}>{props.name}</button>
        </>
    );
};

export default Rightbtn;