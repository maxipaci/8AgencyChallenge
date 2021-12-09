const EmailReggex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PhoneReggex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const ValidateName = (nameField, fieldName = 'nombre') => {
    if(!nameField){
        return {
            error: true,
            message: `El ${fieldName} es requerido`
        }
    }

    if(nameField.length > 200){
        return {
            error: true,
            message: `El ${fieldName} no puede superar los 200 caracteres`
        }
    }

    return {
        error: false,
        message: ''
    }
}

export const ValidateEmail = (email) => {
    if(!email){
        return {
            error: true,
            message: 'El email es requerido'
        }
    }

    if(!EmailReggex.test(email)){
        return {
            error: true,
            message: 'Email inválido'
        }
    }

    if(email.length > 200){
        return {
            error: true,
            message: 'El email no puede superar los 200 caracteres'
        }
    }

    return {
        error: false,
        message: ''
    }
}

export const ValidatePhone = (phone) => {
    if(!phone){
        return {
            error: true,
            message: 'El teléfono es requerido'
        }
    }

    if(!PhoneReggex.test(phone)){
        return {
            error: true,
            message: 'Teléfono inválido'
        }
    }

    if(phone.length > 200){
        return {
            error: true,
            message: 'El teléfono no puede superar los 200 caracteres'
        }
    }

    return {
        error: false,
        message: ''
    }
}

export const ValidateJob = (job) => {
    if(!job){
        return {
            error: true,
            message: 'El trabajo es requerido'
        }
    }

    if(job.length > 200){
        return {
            error: true,
            message: 'El trabajo no puede superar los 200 caracteres'
        }
    }

    return {
        error: false,
        message: ''
    }
}