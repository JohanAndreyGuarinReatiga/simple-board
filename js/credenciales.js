const ENV = async()=>{
    let peticion = await fetch("../environment.json");
    let data = await peticion.json();
    return data;
}
export const validation = (users, data)=>{
    for (let i = 0; i < users.length; i++){
        if (users[i].USER === data.email){
            if(users[i].PWD === data.password){
                const {USER:email_user, ROL:type_user} = users[i];
                return {status:200, email_user, type_user}
            }
            else return {status: 401, message: "Contraseña incorrecta"};
        }
    }
    return {status: 404, message: "Usuario incorrecto"};
}

export const users = await ENV();


