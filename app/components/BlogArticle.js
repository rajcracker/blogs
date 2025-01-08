import Image from "next/image";
import {
    getEntriesByType,
  } from "../utils/contentful";
import Link from "next/link";

  
const BlogArticle = async() => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", "");
  };
    const article = await getEntriesByType("blog");
    console.log(Array.isArray(article), article);
    return (<>
        <div className="container">
        <h2 className="fw-bold fs-4 mb-2 mt-5 text-uppercase">{'Blogs'}</h2>
            <div   className="row">
            {article.map((item) => (
                        
                        <div className="col-md-4" key={item.id}>
                        <div className="card pt-3 mb-5 bg-white rounded border-0">
                            <div>
                            <div className="card-body p-0 main-blog">
                            <Image width={380} alt="Rajendra Nagar" height={200}  src={item.previewImage} className="mb-2 img-fluid"/>
                            <Link type="button" href={'/blogsDetails/'+item.id}><p className="card-text small mb-2 text-secondary">{'In '}<span className="highlight-text fw-bold">{item.Category}
                            </span></p>
                                  {/* <p className="small text-secondary">{item.AutherType}</p> */}
                                  <h3 className="blog-title fs-5 fw-bold">{item.title}</h3>
                                  <p className="blog-text mb-2">{item.summary.substr(0, 100)+'...'}</p>
                                  <p className="date-text mt-0 mb-0"><i className="bi bi-calendar-date"></i> {formatDate(item.date)}</p>
                                  </Link>
                             
                            </div>
                            </div>
                            </div>
                          </div>
                   
                  ))}
                   </div>
        </div>
    </>)
}

export default BlogArticle;