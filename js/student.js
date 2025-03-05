import {save, transformInputFormulary} from "./formStudent.js";

const add_student = document.querySelector("#add_student");
const dialog__add_student = document.querySelector("#dialog__add_student");
const dialog__close = document.querySelector("#dialog__close");
const form__student = document.querySelector("#form__student");

add_student.addEventListener("click", () => {
  dialog__add_student.showModal();
})

dialog__close.addEventListener("click", ()=> dialog__add_student.close());

form__student.addEventListener("submit", (e) => {
    e.presetDefault();
    const data = transformInputFormulary(e)
    const response = save(data);
    console.log(response);
    form__student.reset();
})