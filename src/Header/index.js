import { useState, useEffect } from "react";
import "./style.css";

const Header = ({ title }) => {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const interval = setInterval(() => {
            setTime(new Date());
        },1000)
    
        return () => {
            clearInterval(interval);
        }
    }, []);
    
    const showingNowDate = () => {
        const newDate = new Date();
    
        return newDate.toLocaleDateString(
            undefined,
            {
                month: "long",
                weekday: "long",
                day: "numeric",
                year: "numeric"
            }
        )
    }

    return (
        <header className="header">
            <p className="header__timer">
                Dzisiaj jest: {showingNowDate()}, {time.toLocaleTimeString()}
            </p>
            <h1 className="header__title">{title}</h1>
        </header>
    );
};

export default Header;