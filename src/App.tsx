import "./styles.css";
import IMAGE from "./react.png";
import LOGO from "./angry-svg.svg";

export const App = () => {
    return (
        <>
            <h1>App</h1>
            <img src={IMAGE} alt="image" height={300} />
            <img src={LOGO} alt="image" height={300} />
        </>
    );
};
