import Image from "next/image";

export default function Footer() {
    return (
        <>
    <footer className="">
    <div className="container">
      <div className="row">
      <div className="colmd-12">
        <div className="divider mx-auto mt-5 mb-5"></div>
      </div>
    </div>
      <div className="row gy-4 gx-5">
        <div className="col-md-6">
        
          <h3 className="fw-bold mt-0"> <Image width={50} alt="Rajendra Nagar" height={50} src={'/assets/profile2.jpg'} className="rounded-circle me-2"/>  { 'Rajendra Nagar'}</h3>
          <p className="">
            {'Experienced Full-Stack Developer with over 8 years of expertise in building dynamic, scalable web applications. Skilled in Vue.js and Laravel, with a strong foundation in React and other modern web technologies.'}
          </p>
          <ul className="list-inline social-icons">
            <li className="list-inline-item">
            <a href="#" className="highlight-text text-decoration-none"><i class="bi bi-facebook"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="highlight-text text-decoration-none"><i class="bi bi-linkedin"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="highlight-text text-decoration-none"><i class="bi bi-github"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="highlight-text text-decoration-none"><i class="bi bi-envelope"></i></a>
            </li>
          </ul>
          <p className="mb-0 blog-text">&copy; 2024 All rights reserved.</p>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>
                <ul className="list-unstyled footer-links">
                    <li><a href="#" className="text-dark text-decoration-none fw-bold">Privacy Policy</a></li>
                    <li><a href="#" className="text-dark text-decoration-none fw-bold">Terms & Conditions</a></li>
                    <li><a href="#" className="text-dark text-decoration-none fw-bold">Why Us</a></li>
                    <li><a href="#" className="text-dark text-decoration-none fw-bold">Team</a></li>
                    <li><a href="#" className="text-dark text-decoration-none fw-bold">Careers</a></li>
                </ul>
            </div>

            <div className="col-md-6">
            <h5 className="fw-bold mb-3">{"Let's Connect"}</h5>
                <ul className="list-unstyled">
                    <li> <a href="#" className="highlight-text text-decoration-none fs-5"><i class="bi bi-whatsapp"></i> { '+91 9950105566'}</a></li>
                    <li> <button type="button" class="btn btn-outline-primary mt-3"><i class="bi bi-cloud-arrow-down-fill"></i> { 'Download CV'}</button> <a href="#" className="highlight-text text-decoration-none fs-5"></a></li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </footer>

        </>
    )
}