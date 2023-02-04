interface IArticle {
    id: number
    title: string
    body: string
}

type ArticleState = {
    articles: IArticle[]
}

type ArticleAction = {
    type: string
    article: IArticles
}

type DispatcchType = (args: ArticleAction) => ArticleAction