import "./styles.css";
import IMAGE from "./react.png";
import LOGO from "./angry-svg.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
    return (
        <>
            <h1>
                Hello React App {process.env.NODE_ENV} {process.env.name}
            </h1>
            <img src={IMAGE} alt="image" height={300} />
            <img src={LOGO} alt="image" height={300} />
            <ClickCounter />
        </>
    );
};
