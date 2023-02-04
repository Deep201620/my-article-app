import { stat } from "fs"
import { act } from "react-dom/test-utils"
import * as actionTypes from "./actionTypes"

const initialState: ArticleState =  {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
            "Demo article"
        }
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
) : ArticleState => {
    switch(action.type){
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
            }
            return{
                ...state,
                articles: state.articles.concat(newArticle)
            }
            case actionTypes.REMOVE_ARTICLE:
            const updateArticles : IArticle[] = state.articles.filter(
                    article => article.id !== action.article.id
            )
                return{
                    ...state,
                    articles: updateArticles
                }
    }
    return state;
}

export default reducer