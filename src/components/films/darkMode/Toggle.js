import React, { useEffect, useState } from 'react';

/** react-outside-click-handler **/
import OutsideClickHandler from 'react-outside-click-handler';
import { Design } from './Design';

const Toggle = () => {

	const themeSelected = localStorage.getItem('theme');

	const [ darkMode, setDarkMode ] = useState({
		checked: !!themeSelected,
		hasFocus : false
    });
	
	const { checked, hasFocus } = darkMode;

	useEffect(() => {
		if(hasFocus) document.querySelector('.icon-mode-thumb').classList.add('icon-mode-thumb-focus');
	}, [hasFocus])

	const handleDarkMode = () => {
		
		if (!checked) {
			//Si checked y hasFocus son diferentes de falsos se activa el dark mode
			const mode = document.querySelector('.dark-mode');
			mode.classList.add('dark-mode-active');
			const dark_mode_exists = document.querySelector('.dark-mode-active');
			if (!!dark_mode_exists) {
				setDarkMode({
					checked: true,
					hasFocus : true
				});
				localStorage.setItem('theme', 'dark');
			}
			
		} else {
			//Si checked y hasFocus son falsos se desactiva el dark mode
			const dark_mode_exists = document.querySelector('.dark-mode-active');
			if (!!dark_mode_exists) {
				setDarkMode({
					checked: false,
					hasFocus : !hasFocus
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
						setDarkMode({
							...darkMode,
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

