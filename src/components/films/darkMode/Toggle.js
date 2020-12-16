import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../userContext';
import { useThemeDetector } from './useThemeDetector';

/** react-outside-click-handler **/
import OutsideClickHandler from 'react-outside-click-handler';
import { Design } from './Design';

const Toggle = () => {
	
	/** Use content for dark mode **/
	const {userState, setUserState} = useContext(userContext);
	const {darkMode} = userState;

	// useThemeDetector - Detectamos el tema del sistema - Hacemos un condicional en la que si el tema es dark creamos en el localStorage
	// creamos la Key -> "Dark" y le asignamos 'true' 
	const themeDefault = useThemeDetector();
	useEffect(() => {
		const localStorageDark = JSON.parse(localStorage.getItem('dark'));
		const themeSO = () => {
			if(localStorageDark === null){
				if(themeDefault){
					return localStorage.setItem('dark','true');
				}
			}
			return;
		}
		themeSO();
	}, [themeDefault])


	const themeSelected = JSON.parse(localStorage.getItem('dark'));

	const [ focus, setHasFocus ] = useState({
		hasFocus : false
    });
	
	const { hasFocus } = focus;

	/** Comprobamos el estado inicial de dark mode **/
	useEffect(() => {
		/** Comprobar si esta en verdadero o falso**/
		if(themeSelected){
			setUserState({
				...userState,
				darkMode : true
			});
		}else{
			setUserState({
				...userState,
				darkMode : false
			});
		}
	}, [setUserState,themeSelected])


	/** Se ejecuta al cambiar estado de hasFocus **/
	useEffect(() => {
		if(hasFocus) document.querySelector('.icon-mode-thumb').classList.add('icon-mode-thumb-focus');
	}, [hasFocus]);

	const handleDarkMode = () => {
		
		if (!darkMode) {
			//Si darkMode y hasFocus son diferentes de falsos se activa el dark mode
			const mode = document.querySelector('.dark-mode');
			mode.classList.add('dark-mode-active');
			const dark_mode_exists = document.querySelector('.dark-mode-active');
			if (!!dark_mode_exists) {
				setHasFocus({
					hasFocus : true
				});
				setUserState({
					...userState,
					darkMode : true
				});
				localStorage.setItem('dark', 'true');
			}
			
		} else {
			//Si darkMode y hasFocus son falsos se desactiva el dark mode
			const dark_mode_exists = document.querySelector('.dark-mode-active');
			if (!!dark_mode_exists) {
				setHasFocus({
					hasFocus : true
				});
				setUserState({
					...userState,
					darkMode : !darkMode
				});
				localStorage.setItem('dark', 'false');
			}
			document.querySelector('.dark-mode').classList.remove('dark-mode-active');
		}

	};	

	return (
		<div className="dark-mode-content">
			<div className="title caja-1">{`Light`}</div>
				<OutsideClickHandler
					onOutsideClick={ () => {
						setHasFocus({
							hasFocus : false
						});
						document.querySelector('.icon-mode-thumb').classList.remove('icon-mode-thumb-focus');
					}}
					disabled={!hasFocus}
				>
					<Design handleDarkMode={handleDarkMode} themeSelected={themeSelected} />

				</OutsideClickHandler>
			<div className="title caja-2">Dark</div>
								
		</div>
	);
};

export default React.memo(Toggle);

