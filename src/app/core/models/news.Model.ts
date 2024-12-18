export interface News {
    id: string;
    categoryID: string;
    title: string;
    description?: string;
    publishedDate: string;
    content?: string;
    urlToImage?: string;
    showOnHomepage?: string;
  }
  export interface NewsResponse {
    News: News[];
  }