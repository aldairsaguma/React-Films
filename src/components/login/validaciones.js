/** Expresiones regulares **/
import { expresiones } from '../../expresiones/expresiones-regulares';
import PropTypes from 'prop-types'

export const validaciones = (input, setInputState) => {

    const { name, value } = input;
    const { rName, rLastName, rEmail, rPassword } = expresiones;

    const validarCampos = (expresion, nombre, valor) => {
        if(valor.length>0){
            if(expresion.test(valor)){
             
                document.getElementById(`group__${nombre}`).children[1].classList.remove('campo-obligatorio-error');
                setInputState( inputState => ({...inputState,[nombre] : true}) );
            }else{
                document.getElementById(`group__${nombre}`).children[1].classList.add('campo-obligatorio-error');
                setInputState( inputState => ({...inputState,[nombre] : false}) );
            } 
        }else{
            document.getElementById(`group__${nombre}`).children[1].classList.remove('campo-obligatorio-error');
            setInputState( inputState => ({...inputState,[nombre] : false}) );
        }
    }

    const validarPassword = () => {

        const password1 = document.getElementById('rPassword');
        const password2 = document.getElementById('rPassword2');
        if (password1.value.length > 0 || password2.value.length > 0) {
            if(password1.value === password2.value){
                console.log('iguales');
            }else{
                console.log('diferentes');
            }
        }
    }

    switch (name) {
        
        case 'rName':
            validarCampos(rName,name,value);
            break;

        case 'rLastName':
            validarCampos(rLastName,name,value);
            break;
        
        case 'rEmail':
            validarCampos(rEmail,name,value);
            break; 

        case 'rPassword':
            validarCampos(rPassword,name,value);
            validarPassword();
            break;

        case 'rPassword2':
            validarPassword();
            break;
    
        default:
            break;
    }
}

validaciones.protoTypes = {
    input : PropTypes.string.isRequired,
    setInputState : PropTypes.func.isRequired
}