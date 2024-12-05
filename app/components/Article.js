import Image from "next/image";
import {
    getEntriesByType,
  } from "../utils/contentful";

  
const Article = async() => {
    const article = await getEntriesByType("blog");
    console.log(Array.isArray(article), article);
    return (<>
        <div className="container">
          <div className="row">
            <div className="col-md-9 ps-0">
            <h2 className="fw-bold fs-4 mb-3 mt-5 text-uppercase">{'Recent Blogs'}</h2>
            {article.map((item) => (
                        <div  key={item.id}>
                        <div className="card  border-0">
                            <div>
                            <div className="card-body">
                              <div className="row align-items-center">
                                  <div className="col-md-9 main-blog ps-0">
                                  <a type="button" href={'/blogs/'+item.id}><p className="card-text small mb-2 text-secondary">{'Published By - '}<span className="highlight-text fw-bold">{item.AutherName}</span> </p>
                                  {/* <p className="small text-secondary">{item.AutherType}</p> */}
                                  <h3 className="blog-title fs-5 fw-bold">{item.title}</h3>
                                  <p className="blog-text">{item.summary.substr(0, 100)+'...'}</p></a>
                                  </div>
                                  <div className="col-md-3">
                                  <Image width={200} alt="Rajendra Nagar" height={150}  src={item.previewImage}/>
                                  </div>
                              </div>
                              <div className="row">
                                <div className="col md-12 ps-0">
                                <div className="divider mx-auto mt-3 mb-3"></div>
                                </div>
                            </div>  
                             
                            </div>
                            </div>
                            </div>
                    </div>
                  ))}
            </div>
            <div className="col-md-3 sidebar">{'D'}</div>
          </div>
        </div>
    </>)
}

export default Article;