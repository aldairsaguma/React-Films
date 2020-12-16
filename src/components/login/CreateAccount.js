import React, { useContext } from 'react'
import { userContext } from '../films/userContext';

/** FontAwesome **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const CreateAccount = () => {

    /** Estados de usurio UseContenxt **/
    const {userState, setUserState} = useContext(userContext);
    const {singIn} = userState;

    const [passwordShown, setpasswordShown] = useState(false)

    /** Cerrar Modal delegando eventos**/
    const handleClosed = (e) => {
        if(e.target.classList.contains('createAccount__container')){
            setUserState({
                ...userState,
                singIn : false
            });
        }
        if(e.target.classList.contains('close-create-account')){
            setUserState({
                ...userState,
                singIn : !singIn
            });
        }
        e.stopPropagation();
    }

    /** Registrar usuario **/
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e);
    }

    /** Ver contraseña **/
    const handleViewPassword = () => {
        setpasswordShown(!passwordShown)
    }

    return (
        <div className="createAccount__container createAccount-active" onClick={handleClosed} >
            <div className="create-account">
                <div className="create-account-body">
                    <div>
                        <span className="close-create-account" >
                            <FontAwesomeIcon icon="times" title="Close" style={{pointerEvents:"none"}} />
                        </span>
                    </div>
                    <div className="form-div">
                        <div>
                            <h3>{`Crear cuenta`}</h3>
                        </div>
                        <form action="" onSubmit={handleRegister}>
                            <div className="body-form">
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder="Nombre" 
                                        name="rName" 
                                    />
                                    {/* <span className="campo-obligatorio">{`Este es un campo obligatorio.`}</span> */}
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder="Apellido"
                                        name="rLastName"
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        placeholder="Correo"
                                        name="rEmail" 
                                    />
                                </div>
                                <div>
                                    <div className="password-validator">
                                        <input 
                                            type={ passwordShown ? 'text' : 'password' } 
                                            placeholder="Contraseña"
                                            name="rPassword" 
                                        />
                                        <span className="view-password" onClick={handleViewPassword}>
                                            {
                                                passwordShown ?
                                                (<FontAwesomeIcon icon="eye-slash" title="Ocultar" />)
                                                :
                                                (<FontAwesomeIcon icon="eye" title="Ver" />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="password-validator">
                                        <input 
                                            type={ passwordShown ? 'text' : 'password' } 
                                            placeholder="Repetir contraseña" 
                                            name="rPassword2"
                                        />
                                        <span className="view-password" onClick={handleViewPassword}>
                                            {
                                                passwordShown ?
                                                (<FontAwesomeIcon icon="eye-slash" title="Ocultar" />)
                                                :
                                                (<FontAwesomeIcon icon="eye" title="Ver" />)
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-registrar">
                                <button>
                                    {`REGISTRAR`}
                                </button>
                            </div>
                        </form>
                        <div>
                            <div className="register-facebook">
                                <button type="submit">
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    {` FACEBOOK`} 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
