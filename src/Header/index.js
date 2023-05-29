import { useState, useEffect } from "react";
import "./style.css";

const showingNowDate = (time) => time.toLocaleDateString(
    undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

const Header = ({ title }) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <header className="header">
            <p className="header__timer">
                Dzisiaj jest: {showingNowDate(time)}
            </p>
            <h1 className="header__title">{title}</h1>
        </header>
    );
};

export default Header;