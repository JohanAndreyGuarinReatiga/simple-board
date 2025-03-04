export const findAllPayment = () => {
    const DB = (localStorage.getItem("payment")) ? localStorage.getItem("paymen") : JSON.stringify;
    return DB;
}