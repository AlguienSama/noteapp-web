import React from "react";

import { useTranslation } from 'react-i18next'; 

export function Header(): JSX.Element {
		const { t } = useTranslation();
		
		return (
			<div className="">{t('')}</div>
		)
}