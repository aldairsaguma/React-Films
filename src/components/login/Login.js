import React, { useContext } from 'react';
import { userContext } from '../films/userContext';

/** Font Awesome **/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Login = () => {

    const context = useContext(userContext);
    const { userState, setUserState } = context;
    const { singIn } = userState;
    /** Desplegar modal de registro **/
    const handleRegister = () => {
        setUserState({
            ...userState,
            singIn : !singIn
        });
    };
    
    return (
        <div 
            className="auth__dropdown-container-login"
            >
            <div className="title">
                    {`INICIAR SESIÓN`}
                </div>
                <div>
                    <div>
                        <form>
                            <div className="div-input-email">
                                <input 
                                    type="text" 
                                    required={true}
                                    id="email" 
                                    autoComplete="off"
                                    />
                                <label htmlFor="email">{`Correo electrónico`}</label>
                            </div>
                            <div className="div-input-password">
                                <input 
                                    type="password" 
                                    required={true} 
                                    id="password" 
                                    autoComplete="off"
                                    />
                                <label htmlFor="password">{`Contraseña`}</label>
                            </div>
                            <div className="btn-login-custom">
                                <button type="submit">
                                    {`INICIAR SESIÓN`}
                                </button>
                            </div>
                        </form> 
                        <div className="btn-facebook">
                            <button>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                {` FACEBOOK`} 
                            </button>
                        </div>
                        <div className="forget-register">
                            <div>
                                <span>
                                    {`¿Olvidaste tu contraseña?`}
                                </span>
                            </div>
                            <div>
                                <span onClick={handleRegister}>
                                    {`Registrate`}
                                </span>
                            </div>
                        </div>
                    </div>
             </div>  
        </div>
    )
}
