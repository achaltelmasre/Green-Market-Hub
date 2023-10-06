export const saveListToLocalStorage = (PreviewPostCard) => {
    localStorage.setItem("card", JSON.stringify(PreviewPostCard));
};