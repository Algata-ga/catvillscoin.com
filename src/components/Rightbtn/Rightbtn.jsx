import style from "./Rightbtn.module.css";
const Rightbtn = ({ name, href = "#", fileName = null, width, height }) => {
    return (
        <>
                <button
                    className={style.rightbtn}
                    style={{ width: width, height: height }}
                >
                    {name}
                </button>
        </>
    );
};

export default Rightbtn;

