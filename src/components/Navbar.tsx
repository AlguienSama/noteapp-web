import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next'; 
import {availableLanguages} from "../i18n/i18n";

import ToggleTheme from '../components/ToggleTheme';
import { ThemeProvider } from "../hooks/ThemeContext";
import logo from '../assets/images/logo.png';

export function Navbar(): JSX.Element {
		const { t, i18n } = useTranslation();
		
		return (
				<div className="navbar-content">
					<nav className="navbar">
						<div className="navbar-left">
						</div>
						<Link to={'/'}><img src={logo} alt="logo" className="navbar-logo" /></Link>
						<div className="navbar-right">
							<ThemeProvider children={<ToggleTheme />}></ThemeProvider>
							<label htmlFor="language" className="language navbar-item">
								{t('language')} &nbsp;
								<select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
									{availableLanguages.map((language) =>
										<option value={language.iso} key={language.iso}>{language.lang.toUpperCase()}</option>
									)}
								</select>
							</label>
						</div>
					</nav>
				</div>
		)
}