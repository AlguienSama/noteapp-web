import React, { useContext } from "react";
import { useTranslation } from 'react-i18next'; 

import { ThemeContext } from "../hooks/ThemeContext";

function ToggleTheme(): JSX.Element {
    const { theme, setTheme } = useContext(ThemeContext);
    const { t } = useTranslation();

    function swapTheme() {        
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <div className="toggle-theme navbar-item">
            <span className="switch-text">{t('theme')}</span>
            <label className="switch">
                <input type="checkbox" checked={theme==='dark'} onClick={swapTheme} onChange={e => {}}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleTheme;