import style from "./Rightbtn.module.css"
const Rightbtn = (props) => {

    return (
        <>
        <a href="#"></a><button className={style.rightbtn} style={{width:props.width,height:props.height}}>{props.name}</button><a/>
        </>
    );
};

export default Rightbtn;