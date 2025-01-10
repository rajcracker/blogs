import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <>
    <footer className="pt-5">
    <div className="container">
      <div className="row gy-4 gx-5">
        <div className="col-md-6">
        
          <h3 className="fw-bold mt-0"> <Image width={50} alt="Rajendra Nagar" height={50} src={'/assets/profile2.jpg'} className="rounded-circle me-2"/>  { 'Rajendra Nagar'}</h3>
          <p className="">
            {'Experienced Full-Stack Developer with over 8 years of expertise in building dynamic, scalable web applications. Skilled in Vue.js and Laravel, with a strong foundation in React and other modern web technologies.'}
          </p>
          <ul className="list-inline social-icons">
            <li className="list-inline-item">
            <a href="https://www.facebook.com/raj.nagar.165" className="highlight-text text-decoration-none" target="_blank"><i className="bi bi-facebook"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/rajendra-nagar-464580170/" target="_blank" className="highlight-text text-decoration-none"><i className="bi bi-linkedin"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/rajcracker" className="highlight-text text-decoration-none" target="_blank"><i className="bi bi-github"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:sharkweb.in@gmail.com" className="highlight-text text-decoration-none"><i className="bi bi-envelope"></i></a>
            </li>
          </ul>
          <p className="mb-0 blog-text"><Image width={18} alt="Rajendra Nagar" height={18} src={'/assets/footer_smily.png'}/> {'Feel Free to Contact Me.'}</p>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
            <h5 className="fw-bold mb-3">{'Quick Links'}</h5>
                <ul className="list-unstyled footer-links">
                    <li> <Link href="/about" className="text-dark text-decoration-none fw-bold">{'About Me'}</Link></li>
                    <li> <Link href="/projects" className="text-dark text-decoration-none fw-bold">{'Projects'}</Link></li>
                    <li> <Link href="/blogs" className="text-dark text-decoration-none fw-bold">{'Blogs'}</Link></li>
                    <li> <Link href="/contact" className="text-dark text-decoration-none fw-bold">{'Contact'}</Link></li>
                </ul>
            </div>

            <div className="col-md-6">
            <h5 className="fw-bold mb-3">{"Let's Connect"}</h5>
                <ul className="list-unstyled">
                    <li> <a href="https://wa.me/+919950105566"  target="_blank" className="highlight-text text-decoration-none fs-5">
                    <Image width={160} alt="Rajendra Nagar" height={36} src={'/assets/WhatsAppButtonGreenSmall.svg'}/>
                   </a></li>
                    <li> <a href="/Rajendra - Full Stack Engineer-(Nov-5-2024).pdf" className="btn btn-outline-primary mt-3" target="_blank"><i className="bi bi-cloud-arrow-down-fill"></i> { 'Download CV'}</a> </li>
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