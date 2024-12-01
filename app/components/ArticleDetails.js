
import Image from "next/image";
import "@fontsource/tenor-sans"; // Defaults to weight 400
import {
    getArticleDetail,
  } from "../utils/contentful";

const ArticleDetails =  async(data) => {
    const article =  await getArticleDetail(data.id);
    console.log(article, 'Article');
    return (
        <>
         <div className="col-md-8 justify-content-center">
                      <div className="card mb-3 border-0 " >
                          
                          <div>
                          <div className="card-body">
                            <div className="mb-3">
                            <Image width={600} alt="Rajendra Nagar" height={300}  src={article.image}/>
                            </div>
                            <p className="card-text small mb-2 text-secondary">{'Published By - '}<span className="highlight-text fw-bold">{article.AutherName}</span> </p>
                            {/* <p className="small text-secondary">{item.AutherType}</p> */}
                              <h3 className="blog-title  fw-bold">{article.title}</h3>
                              <p className="blog-text">{article.summary}</p>
                          </div>
                          </div>
                          </div>
                  </div>
    </>
    );
};

export default ArticleDetails;
