import Image from "next/image";

export default function Banner() {
    return (<>
    
        <div className="heroContainer ">
        <div className="row justify-content-center ">
            <div className="col-lg-9 text-center">
               <Image width={150} alt="Rajendra Nagar" height={150} src={'/assets/profile2.jpg'} className="rounded-circle"/>
                <h1 className="hero-heading">
                Hello  <span className="highlight-text">Welcome</span>  👋 
                </h1>
                <p className=" mt-3 mb-0">
               { ' Here, I share insights, tips, and solutions to simplify complex web development challenges.'}
                </p>
                <p className="">
               { 'Join me on a journey to build smarter, better, and faster in the ever-evolving digital world.'}
                </p>
            </div>
         </div>
        <div className="container">
        <div className="row">
            <div className="col md-12">
            <div className="divider mx-auto mt-5 mb-5"></div>
            </div>
         </div>
        </div>
        </div>
    </>)
}