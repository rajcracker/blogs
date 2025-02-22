import Image from "next/image";
import {
    getEntriesByType,
  } from "../utils/contentful";
import Link from "next/link";
import {productDetails} from "../utils/content";

  
const Article = async() => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", "");
  };
    const article = await getEntriesByType("blog");
    console.log(Array.isArray(article), article);
    return (<>
        <div className="container">
          <div className="row">
            <div className="col-md-9 ps-0">
            <h1 className="fw-bold fs-4 mb-5 mt-5 text-uppercase">{'Recent Blogs'}</h1>

            {article.map((item) => (
                        <div  key={item.id}>
                        <div className="card  border-0">
                            <div>
                            <div className="card-body pt-0">
                              <div className="row align-items-center">
                                  <div className="col-md-9 main-blog ps-0">
                                  <Link type="button" href={'/blogsDetails/'+item.id}><p className="card-text small mb-2 text-secondary">{'In '}<span className="highlight-text fw-bold">{item.Category} 
                                    </span></p>
                                  {/* <p className="small text-secondary">{item.AutherType}</p> */}
                                  <h3 className="blog-title fs-5 fw-bold">{item.title}</h3>
                                  <p className="blog-text mb-2">{item.summary.substr(0, 100)+'...'}</p>
                                  <p className="date-text mt-0 mb-2"><i className="bi bi-calendar-date"></i> {formatDate(item.date)}</p>
                                  </Link>
                                  </div>
                                  <div className="col-md-3">
                                  <Image width={200} alt="Rajendra Nagar" height={150}  src={item.previewImage}  className="img-fluid w-100"/>
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
            <div className="col-md-3 sidebar">
                <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0 mt-5">
                  <div className="card-header border-0">
                    <h3 className="fs-5 text-uppercase">{'Recent Projects'}</h3>
                    <p className="text-danger">{'All listed projects were carried out under Cracker Digital Media Pvt. Ltd.'}</p>
                  </div>
                  <div className="card-body pt-2">
                    {productDetails.map((data) => (
                       <div className="pb-2 mb-3" key={data.title}>
                       <p className="fs-6 mb-2 fw-bold">{data.title}</p>
                        <Image width={820} alt="Rajendra Nagar" height={350} src={'/assets/projects/'+data.image} className="rounded me-2 img-fluid"/>
                        {/* <p className="fs-5 mb-2 mt-3">{data.description}</p> */}
                      <a className="btn btn-sm btn-outline-primary mt-3" href={data.link} target="_blank"><i className="bi bi-browser-safari"></i> {'Visit Website'}</a>
                     </div> 
                    ))}
                   
                    {/* <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/nextjs-icon-svgrepo-com.svg'/>
                      <div>
                        <div className="title">{'Next Js Development'}</div>
                        <div className="description">{'Expertise in building server-rendered and static web applications.'}</div>
                      </div>
                    </div> */}
                    {/* <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/js.svg'/>
                      <div>
                        <div className="title">{'Javascript'}</div>
                        <div className="description">{'Skilled in building dynamic web apps with clean and efficient code.'}</div>
                      </div>
                    </div>
                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/react.svg'/>
                      <div>
                        <div className="title">{'React'}</div>
                        <div className="description">{'Skilled in building dynamic web apps with clean and efficient code.'}</div>
                      </div>
                    </div>

                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/laravel-2.svg'/>
                      <div>
                        <div className="title">{'React'}</div>
                        <div className="description">{'Skilled in building dynamic web apps with clean and efficient code.'}</div>
                      </div>
                    </div>
                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/wp.svg'/>
                      <div>
                        <div className="title">{'React'}</div>
                        <div className="description">{'Skilled in building dynamic web apps with clean and efficient code.'}</div>
                      </div>
                    </div> */}
                  </div>
                </div>

            </div>
          </div>
        </div>
    </>)
}

export default Article;