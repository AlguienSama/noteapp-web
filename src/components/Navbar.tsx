import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next'; 
import {availableLanguages} from "../i18n/i18n";

import ToggleTheme from '../components/ToggleTheme';
import { ThemeProvider } from "../hooks/ThemeContext";
import logo from '../assets/images/logo.png';
import AuthService from "../services/Auth";
import { useLocalStorage } from "../services/LocalStorage";

const isLogged = () => {
	const user = localStorage.getItem("user");
	
	return user !== null;
}

export function Navbar(): JSX.Element {
	let navigate = useNavigate();
	// eslint-disable-next-line
	const [language, setLanguage] = useLocalStorage("language", "");

	const logout = async () => {
		await AuthService.logout();
		navigate('/');
		window.location.reload();
	}

	const { t, i18n } = useTranslation();

	let buttons: JSX.Element;
	
	if (!isLogged()) {			
		buttons = <div className="navbar-item">
			<Link to={'/login'}><button className="btn">{ t('button.signin') }</button></Link>
			<Link to={'/register'}><button className="btn">{ t('button.signup') }</button></Link>
		</div>
	} else {
		buttons = <div className="navbar-item">
			<button className="btn" onClick={logout}>{ t('button.logout') }</button>
			{ /* Dropdown profile ¿? */ }
		</div>
	}

	const changeLanguage = (event: React.ChangeEvent<HTMLInputElement> | any) => {
		i18n.changeLanguage(event.target.value);
		setLanguage(event.target.value);
	}
	
	return (
			<div className="navbar-content">
				<nav className="navbar">
					<div className="navbar-left">
						<ThemeProvider children={<ToggleTheme />}></ThemeProvider>
					</div>
					<Link to={'/'}><img src={logo} alt="logo" className="navbar-logo" /></Link>
					<div className="navbar-right">
						<label htmlFor="language" className="language navbar-item">
							<select defaultValue={i18n.language} onChange={changeLanguage}>
								{availableLanguages.map((language) =>
									<option value={language.iso} key={language.iso}>{language.lang.toUpperCase()}</option>
								)}
							</select>
						</label>
						{buttons}
					</div>
				</nav>
			</div>
	)
}