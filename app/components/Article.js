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
            <div className="col-md-12 mb-5 text-center">
              <h2 className="fw-bold">{'Latest Posts'}</h2>
            </div>
          </div>
            <div className="row ">
            {article.map((item) => (
                      
                     <div className="col-md-6" key={item.id}>
                      <div className="card mb-3 border-0 " >
                          
                          <div>
                          <div className="card-body">
                            <div className="mb-3">
                            <Image width={600} alt="Rajendra Nagar" height={300}  src={item.previewImage}/>
                            </div>
                            <p className="card-text small mb-2 text-secondary">{'Published By - '}<span className="highlight-text fw-bold">{item.AutherName}</span> </p>
                            {/* <p className="small text-secondary">{item.AutherType}</p> */}
                              <h3 className="blog-title  fw-bold">{item.title}</h3>
                              <p className="blog-text">{item.summary}</p>
                              <a type="button" href={'/blogs/'+item.id} class="btn btn-outline-primary">{'Read More'}</a>
                          </div>
                          </div>
                          </div>
                  </div>
                ))}
            </div>
        </div>
    </>)
}

export default Article;