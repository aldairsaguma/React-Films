import React, { useContext } from 'react'
import { userContext } from '../films/userContext';
/** Validaciones **/
import { validaciones } from './validaciones';

/** FontAwesome **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const CreateAccount = () => {

    /** Estados de usurio UseContenxt **/
    const {userState, setUserState} = useContext(userContext);
    const {singIn} = userState;

    const [showPassword, setshowPassword] = useState(false);

    /** Estado de inputs **/

    const [inputState, setInputState] = useState({
        rName : false, 
        rLastName : false,
        rEmail : false,
        rPassword : false,
        rPassword2 : false
    });

    const { rName, rLastName, rEmail, rPassword, rPassword2 } = inputState;

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

    /** Ver contraseña **/
    const handleViewPassword = () => {
        setshowPassword(!showPassword)
    }

    /** Validación de formulario **/
    const handleValidation = (e) => {
        validaciones(e.target,setInputState);
    }


    /** Registrar usuario **/
    const handleRegister = (e) => {
        e.preventDefault();
        if (rName && rLastName && rEmail && rPassword && rPassword2) {
            
        }
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
                        <form action="" id="formCreateAccount" className="formCreateAccount" onSubmit={handleRegister}>
                            <div className="body-form">
                                <div id="group__rName">
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Nombre" 
                                            name="rName" 
                                            id="rName"
                                            onKeyUp={handleValidation}
                                            onBlur={handleValidation}
                                        />
                                    </div>
                                    <span className="campo-obligatorio">{`Ingrese solo letras.`}</span>
                                    {/* <span className="campo-obligatorio">{`Este es un campo obligatorio.`}</span> */}
                                </div>
                                <div id="group__rLastName">
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Apellido"
                                            name="rLastName"
                                            id="rLastName"
                                            onKeyUp={handleValidation}
                                            onBlur={handleValidation}
                                        />
                                    </div>
                                    <span className="campo-obligatorio">{`Ingrese solo letras.`}</span>
                                </div>
                                <div id="group__rEmail">
                                    <div>
                                        <input 
                                            type="email" 
                                            placeholder="Correo"
                                            name="rEmail"
                                            id="rEmail" 
                                            onKeyUp={handleValidation}
                                            onBlur={handleValidation}
                                        />
                                    </div>
                                    <span className="campo-obligatorio">{`Ingrese un correo valido.`}</span>
                                </div>
                                <div>
                                    <div id="group__rPassword" className="password-validator">
                                        <div>
                                            <input 
                                                type={ showPassword ? 'text' : 'password' } 
                                                placeholder="Contraseña"
                                                name="rPassword"
                                                id="rPassword" 
                                                autoComplete="true"
                                                minLength="4"
                                                maxLength="30"
                                                onKeyUp={handleValidation}
                                                onBlur={handleValidation}
                                            />
                                            <span className="view-password" onClick={handleViewPassword}>
                                                {
                                                    showPassword ?
                                                    (<FontAwesomeIcon icon="eye-slash" title="Ocultar" />)
                                                    :
                                                    (<FontAwesomeIcon icon="times-circle" title="Ver" />)
                                                }
                                            </span>
                                        </div>
                                        <span className="campo-obligatorio">{`La contraseña debe tener de  4 a 30 caracteres.`}</span>
                                    </div>
                                </div>
                                <div>
                                    <div id="group__rPassword2" className="password-validator">
                                        <div>
                                            <input 
                                                type={ showPassword ? 'text' : 'password' } 
                                                placeholder="Repetir contraseña" 
                                                name="rPassword2"
                                                id="rPassword2"
                                                autoComplete="true"
                                                minLength="4"
                                                maxLength="30"
                                                onKeyUp={handleValidation}
                                                onBlur={handleValidation}
                                            />
                                            <span className="view-password" onClick={handleViewPassword}>
                                                {
                                                    showPassword ?
                                                    (<FontAwesomeIcon icon="eye-slash" title="Ocultar" />)
                                                    :
                                                    (<FontAwesomeIcon icon="eye" title="Ver" />)
                                                }
                                            </span>
                                        </div>
                                        <span className="campo-obligatorio">{`Ambas contraseñas deben ser iguales.`}</span>
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
