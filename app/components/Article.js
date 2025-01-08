import Image from "next/image";
import {
    getEntriesByType,
  } from "../utils/contentful";
import Link from "next/link";

  
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
            <h2 className="fw-bold fs-4 mb-5 mt-5 text-uppercase">{'Recent Blogs'}</h2>
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
                {/*Technologies */}
                <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0 mt-5">
                  <div className="card-header border-0">
                    {'Technologies'}
                  </div>
                  <div className="card-body pt-2">
                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/Vue.js_Logo_2.svg'/>
                      <div>
                        <div className="title">{'Vue Js, Vuex'}</div>
                      </div>
                    </div> 
                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/nextjs-icon-svgrepo-com.svg'/>
                      <div>
                        <div className="title">{'Next Js Development'}</div>
                        <div className="description">{'Expertise in building server-rendered and static web applications.'}</div>
                      </div>
                    </div>
                    <div className="list-item pb-2">
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
                    </div>
                  </div>
                </div>

                <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0 mt-5">
                  <div className="card-header border-0">
                    {'Recent Projects'}
                  </div>
                  <div className="card-body pt-2">
                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/Vue.js_Logo_2.svg'/>
                      <div>
                        <div className="title">{'Vue Js, Vuex'}</div>
                      </div>
                    </div> 
                    <div className="list-item pb-2">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/nextjs-icon-svgrepo-com.svg'/>
                      <div>
                        <div className="title">{'Next Js Development'}</div>
                        <div className="description">{'Expertise in building server-rendered and static web applications.'}</div>
                      </div>
                    </div>
                    <div className="list-item pb-2">
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
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
    </>)
}

export default Article;