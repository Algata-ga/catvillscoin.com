import style from "./Heading.module.css"
const Heading = (props) => {

    return (
        <>
        <h3 className={style.heading}>{props.heading}</h3>
        </>
    );
};

export default Heading;