
import Image from "next/image";
import "@fontsource/karla"; // Defaults to weight 400
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    getArticleDetail,
  } from "../utils/contentful";

const ArticleDetails =  async(data) => {
    const article =  await getArticleDetail(data.id);
    console.log(article, 'Article');
    const options = {
        renderText: (text) => {
          return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      };
    return (
        <>
        <div class="row justify-content-center blog_details">

            <div className="col-md-8 justify-content-start">
           
                        <div className="card mb-3 border-0 " >
                            <div>
                            <div className="card-body">
                                   <div className="row">
                                    <div className="col-md-12 text-center">
                                    <p className="card-text small mb-2 text-secondary">{'Published By - '}<span className="highlight-text fw-bold">{article.AutherName}</span> </p>
                                    {/* <p className="small text-secondary">{item.AutherType}</p> */}
                                    <h1 className="blog-title ">{article.title}</h1>
                                    <p className="blog-text fs-5">{article.summary}</p>
                                    </div>
                                   </div>
                                    <div className="mb-3 mt-5 mb-5 text-center">
                                        <Image width={1200} alt="Rajendra Nagar"  height={700}  src={article.image} className="rounded" />
                                     </div>

                                    {documentToReactComponents(article.description, options)}
                                </div>

                            </div>
                            </div>
            </div>
        </div>
    </>
    );
};

export default ArticleDetails;
