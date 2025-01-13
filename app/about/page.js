
import { use } from "react";
import Image from "next/image";
export const metadata = {
  title: "About Me | Contact: +91 9950105566",
  description:
    "I am, a seasoned full-stack developer with 8+ years of experience in Laravel, Vue.js, React, and more. I specialize in building custom web solutions including e-commerce platforms and CMS. Contact me today at +91 9950105566.",
  keywords: ["Vue.js Developer", "Full-Stack Web Developer", "Laravel Expert", "Custom Web Development"],
  metadataBase: new URL("https://www.rajendranagar.co.in/"),
  alternates: {
    canonical: "https://www.rajendranagar.co.in/",
  }
};
export default function AboutMe(params) {
  // const router = useRouter()
  return (<>
  <div className="container ">
    {/* <h1 className="mt-5 mb-5">{'About Me'}</h1> */}
    <div className="row m-5 mb-5 justify-content-center">
      <div className="col-md-7">
       <h2>{'Hi, I’m Rajendra Nagar !'}</h2>
       <p className="fs-5">{'I have over 8 years of experience as a Front end and 5 years as a full stack developer, specializing in JavaScript, Vue.js, React, Laravel, Bootstrap, Tailwind, CSS, HTML, MySQL, Vuex, Next.js, and WordPress. My projects include coaching consultant tools, invoice systems, e-commerce websites, CMS, and React-based applications. I use Jira for project management and GitHub for version control, ensuring efficient and organized workflows.'}</p>
      </div>
    </div>
    <div className="row m-5 mb-5 justify-content-center">
      <div className="col-md-7 text-center">
      <Image width={300} alt="Rajendra Nagar" height={300} src={'/assets/about_me_2.jpg'} className="rounded me-2 img-fluid"/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 mt-5 mb-3 text-center">
        <p className="fs-3 fw-400">{'Creating value for organizations with custom-tailored and scalable solutions.'}</p>
      </div>

      <div className="row justify-content-center">
          <div className="col-md-2">
            <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
              <div className="card-body">
                <div className="list-item pb-2 border-0">
                    <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/company.png'/>
                    <div>
                      <div className="title mb-0">{'Cracker Digital Media Pvt.'}</div>
                    </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
              <div className="card-body">
                <div className="list-item pb-2 border-0">
                    <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/company2.jpg'/>
                    <div>
                      <div className="title mb-0">{'Kriscent Techno Hub Pvt. Ltd.'}</div>
                    </div>
                </div> 
              </div>
            </div>
          </div>

      </div>
    </div>
    <div className="row">
      <div className="col-md-12 mt-5 mb-3">
        <h3 className="fs-5">{'Core Skills'}</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/Vue.js_Logo_2.svg'/>
                <div>
                  <div className="title mb-0">{'Vue Js, Vuex, Vue3'}</div>
                </div>
            </div> 
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/js.svg'/>
                <div>
                  <div className="title mb-0">{'Javascript Development'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/nextjs-icon-svgrepo-com.svg'/>
                <div>
                  <div className="title mb-0">{'Next Js Framework'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/react.svg'/>
                <div>
                  <div className="title mb-0">{'React Js Development'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/bootstrap-new.webp'/>
                <div>
                  <div className="title mb-0">{'Bootstrap Framework'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/laravel-2.svg'/>
                <div>
                  <div className="title mb-0">{'Laravel Development'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/wp.svg'/>
                <div>
                  <div className="title mb-0">{'WordPress'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>


      <div className="col-md-2">
        <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
          <div className="card-body">
             <div className="list-item pb-2 border-0">
                <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/mysql-icon.svg'/>
                <div>
                  <div className="title mb-0">{'MySQL'}</div>
                </div>
            </div> 
            
          </div>
        </div>
      </div>

    </div>

    <div className="row">
       <h3 className="fs-5">{'Project and code management tools'}</h3>

       <div className="row mt-3">
            <div className="col-md-2">
              <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
                <div className="card-body ">
                  <div className="list-item pb-2 border-0 project-tool">
                  <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/github.svg'/>
                    <div>
                      <div className="title mb-0 ms-2">{'GitHub'}</div>
                    </div>
                  </div> 
                  
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                  <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
                    <div className="card-body ">
                      <div className="list-item pb-2 border-0 project-tool">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/jira.svg'/>
                        <div>
                          <div className="title mb-0 ms-2">{'Jira'}</div>
                        </div>
                      </div> 
                      
                      </div>
                    </div>
              </div>

              <div className="col-md-2">
                  <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
                    <div className="card-body ">
                      <div className="list-item pb-2 border-0 project-tool">
                      <Image width={200} alt="Rajendra Nagar" className="icon" height={150}  src='/assets/technologies/docker.svg'/>
                        <div>
                          <div className="title mb-0 ms-2">{'Docker'}</div>
                        </div>
                      </div> 
                      
                      </div>
                    </div>
              </div>
       </div>
    </div>

    <div className="row mb-5">
       <h3 className="fs-5">{'Achievements'}</h3>

       <div className="row mt-3">
            <div className="col-md-3">
              <Image width={300} alt="Rajendra Nagar"  height={300}  src='/assets/award1.jpg' className="w-100 img-fluid"/>
              <p className="fs-5 mt-2 mb-0">{'Evergreen person of the year'}  <br/>
                - <span className="fs-6">{'Kriscent Techno Hub Pvt. Ltd.'}</span></p>
            </div>
            <div className="col-md-3">
              <Image width={300} alt="Rajendra Nagar"  height={300}  src='/assets/award2.jpg' className="w-100 img-fluid"/>
              <p className="fs-5 mt-2 mb-0">{'Employee of the year'}  <br/>
                - <span className="fs-6">{'Kriscent Techno Hub Pvt. Ltd.'}</span></p>
            </div>

            <div className="col-md-3">
              <Image width={300} alt="Rajendra Nagar"  height={300}  src='/assets/award3.png' className="w-100 img-fluid"/>
              <p className="fs-5 mt-2 mb-0">{'Achievements of the year'}  <br/>
                - <span className="fs-6">{'Cracker Digital Media'}</span></p>
            </div>
       </div>
    </div>
  </div>
  </>)
}
