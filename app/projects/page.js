
import { use } from "react";
import Image from "next/image";
import {productDetails}  from '../utils/content'
export default function Projects(params) {
  // const router = useRouter()
  return (<>
  <div className="container">
        <div className="row  mt-5 mb-2 text-center">
          <h1 className="fs-3 mb-3">{'Recent Projects'}</h1>
        </div>
      <div className="row justify-content-center">
        { productDetails.map((data) => (

       
      <div className="col-md-8" key={data.title}>
          <div className="card shadow-lg  pt-3 mb-5 bg-white rounded border-0">
            <div className="card-body">
              <h2 className="fs-5 mb-2">{data.title}</h2>
               <Image width={820} alt="Rajendra Nagar" height={350} src={'/assets/projects/'+data.image} className="rounded me-2 img-fluid"/>
              <p className="fs-5 mb-2 mt-3">{data.description}</p>
              <ul className="feature-list">
              {data.featureList.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
             </ul>
             <a className="btn  btn-outline-primary mt-3" href={data.link} target="_blank"><i className="bi bi-browser-safari"></i> {'Visit Website'}</a>
            </div>
          </div>
      </div>
       ))}
      </div>
      
    </div>
  </>)
}
