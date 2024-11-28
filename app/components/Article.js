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
                <div className="col-md-12">
                {article.map((item) => (
                      <div className="card mb-3 border-0 " key={item.id}>
                      <div className="row g-0">
                          <div className="col-md-4">
                          <Image width={400} alt="Rajendra Nagar" height={250} src={item.previewImage} className="rounded-4"/>
                          </div>
                          <div className="col-md-8">
                          <div className="card-body ps-5 pt-0">
                            <p className="card-text small mb-2 text-secondary">{'Published By - '}<span className="highlight-text fw-bold">{item.AutherName}</span> </p>
                            {/* <p className="small text-secondary">{item.AutherType}</p> */}
                              <h3 className="blog-title  fw-bold">{item.title}</h3>
                              <p className="blog-text">{item.summary}</p>
                              <button type="button" class="btn btn-outline-primary">{'Read More'}</button>
                          </div>
                          </div>
                      </div>
                    <div className="row">
                        <div className="colmd-12">
                          <div className="divider mx-auto mt-5 mb-5"></div>
                        </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
        </div>
    </>)
}

export default Article;