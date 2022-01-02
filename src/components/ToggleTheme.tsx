import React, { useContext } from "react";

import { ThemeContext } from "../hooks/ThemeContext";

function ToggleTheme(): JSX.Element {
    const { theme, setTheme } = useContext(ThemeContext);

    function swapTheme() {        
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <div className="toggle-theme navbar-item">
            <label className="switch">
                <input type="checkbox" checked={theme==='dark'} onClick={swapTheme} onChange={e => {}}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleTheme;