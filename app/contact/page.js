
import { use } from "react";
import Image from "next/image";
import Freelance from "../components/freelance";
export default function ContactMe(params) {
  return (<>
  <div className="container ">
    
    <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3  mt-5  mb-5 bg-white rounded border-0 text-center">
                        <p className="fs-1">{' ☕✨'}</p>
                        <h1 className="fs-4 mt-3 mb-3">{'Feel Free to Contact Me'}</h1>
                        <p className="fs-5 mb-0">{'Vue & Laravel Expert at Your Service'}</p>
                        <p className="fs-6">{'– Building Seamless Web Solutions'}</p>
                        <p className="fs-5 mb-1"><i className="bi bi-phone"></i> {'+91 9950105566'}</p>
                        <p className="fs-6"><a href="mailto:sharkweb.in@gmail.com" className="text-decoration-none highlight-text"><i className="bi bi-envelope"></i> {'sharkweb.in@gmail.com'}</a></p>
                        <a href="https://www.linkedin.com/in/rajendra-nagar-464580170/"  target="_blank" className="highlight-text text-decoration-none fs-5">
                                            <Image width={100} alt="https://www.linkedin.com/in/rajendra-nagar-464580170/" height={40} src={'/assets/linkedin.png'}/>
                                           </a>
                    </div>
                </div>
            </div>
           
  </div>
  </>)
}
