import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../userContext';

/** react-outside-click-handler **/
import OutsideClickHandler from 'react-outside-click-handler';
import { Design } from './Design';

const Toggle = () => {

	/** Use content for dark mode **/
	const {darkMode, setDarkMode} = useContext(userContext);

	const themeSelected = localStorage.getItem('theme');

	const [ focus, setHasFocus ] = useState({
		hasFocus : false
    });
	
	const { hasFocus } = focus;

	/** Comprobamos el estado inicial de dark mode **/
	useEffect(() => {
		const initialMode = localStorage.getItem('theme'); 
		/** Comprobar si esta en verdadero o falso usando la negación y doble negación**/
		if(!initialMode){
			setDarkMode({
				darkMode : false
			});
		}else if(!!initialMode){
			setDarkMode({
				darkMode : true
			});
		}
	}, [setDarkMode])


	/** Se ejecuta al cambiar estado de hasFocus **/
	useEffect(() => {
		if(hasFocus) document.querySelector('.icon-mode-thumb').classList.add('icon-mode-thumb-focus');
	}, [hasFocus])

	const handleDarkMode = () => {
		
		if (!darkMode.darkMode) {
			//Si darkMode y hasFocus son diferentes de falsos se activa el dark mode
			const mode = document.querySelector('.dark-mode');
			mode.classList.add('dark-mode-active');
			const dark_mode_exists = document.querySelector('.dark-mode-active');
			if (!!dark_mode_exists) {
				setHasFocus({
					hasFocus : true
				});
				setDarkMode({
					darkMode : true
				});
				localStorage.setItem('theme', 'dark');
			}
			
		} else {
			//Si darkMode y hasFocus son falsos se desactiva el dark mode
			const dark_mode_exists = document.querySelector('.dark-mode-active');
			if (!!dark_mode_exists) {
				setHasFocus({
					hasFocus : true
				});
				setDarkMode({
					darkMode : !darkMode
				});
				localStorage.setItem('theme', '');
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

