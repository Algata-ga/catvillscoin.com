import style from "./Centerbtn.module.css";
const Centerbtn = ({ name, width, height }) => {
    return (
        <>
                <button
                    className={style.centerbtn}
                    style={{ width: width, height: height }}
                >
                    {name}
                </button>
        </>
    );
};

export default Centerbtn;

