import style from "./Heading.module.css"
const Heading = (props) => {

    return (
        <>
        <h3 className={style.heading}>{props.heading}<span>{props.change}</span></h3>
        </>
    );
};

export default Heading;