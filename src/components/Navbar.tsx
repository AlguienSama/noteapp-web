import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next'; 
import {availableLanguages} from "../i18n/i18n";

import ToggleTheme from '../components/ToggleTheme';
import { ThemeProvider } from "../hooks/ThemeContext";
import logo from '../assets/images/logo.png';
import AuthService from "../services/Auth";

const isLogged = () => {
	const user = localStorage.getItem("user");
	
	return user !== null;
}

export function Navbar(): JSX.Element {
		const { t, i18n } = useTranslation();

		let buttons: JSX.Element;
		
		if (!isLogged()) {			
			buttons = <div className="">
				<Link to={'/login'}><button>{ t('button.signin') }</button></Link>
				<Link to={'/register'}><button>{ t('button.signup') }</button></Link>
			</div>
		} else {
			buttons = <div className="">
				<button onClick={AuthService.logout}>{ t('button.logout') }</button>
				{ /* Dropdown profile ¿? */ }
			</div>
		}
		
		return (
				<div className="navbar-content">
					<nav className="navbar">
						<div className="navbar-left">
						</div>
						<Link to={'/'}><img src={logo} alt="logo" className="navbar-logo" /></Link>
						<div className="navbar-right">
							<ThemeProvider children={<ToggleTheme />}></ThemeProvider>
							<label htmlFor="language" className="language navbar-item">
								<select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
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