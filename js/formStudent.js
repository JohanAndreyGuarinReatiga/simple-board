export const loadStudent = () => {
    const DB = (localStorage.getItem("students")) ? JSON.parse(localStorage.getItem("students")) : [];
    return DB;
}

export const save = (data)=>{
    const DB = loadStudent();
    DB.push(data);
    localStorage.setItem("students", JSON.stringify(DB));
    return {status: 201, message: "El estudiante ${data.name} fue registrado de forma exitosa."}
}

export const transformInputFormulary = (e) => {
    const data = Object.fromEntries(new FormData(e.target));
    data.phone = Number(data.phone)
    data.enroll_number = Number(data.enroll_number)
    data.date_of_admission = new Date().toISOString();
    return data;
}

