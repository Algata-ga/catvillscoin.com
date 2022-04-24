import style from "./Rightbtn.module.css";
const Rightbtn = ({ name, href = "#", fileName = null, width, height }) => {
    return (
        <>
            <a href={href} download={fileName}>
                <button
                    className={style.rightbtn}
                    style={{ width: width, height: height }}
                >
                    {name}
                </button>
            </a>
        </>
    );
};

export default Rightbtn;

