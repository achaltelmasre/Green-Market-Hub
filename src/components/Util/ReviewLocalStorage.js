export const saveListToLocalStorage = (Reviews) =>{
    localStorage.setItem('Review',JSON.stringify(Reviews))
}