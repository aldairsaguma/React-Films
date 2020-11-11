import React from 'react'

export const Account = () => {
    return (
        <div className="auth__dropdown-account">
            <ul>
                <li className="auth__my_account">Mi Cuenta</li>
                <li className="auth__notification">Notificaciones</li>
                <li className="auth__settings">Configuración</li>
                <li className="auth__logout">Salir</li>
            </ul>
        </div>
    )
}
