import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle){
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
    }
    return simulateHttpRequest(action);
}


export function deleteArticle(article: IArticle){
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article,
    }
    return simulateHttpRequest(action);
}
export function simulateHttpRequest(action: ArticleAction){
    return (dispatch: DispatcchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}