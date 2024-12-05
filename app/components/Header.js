import Image from "next/image";

export default function Header() {
    return (
        <>
         <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand fs-4" href="#"><Image width={50} alt="Rajendra Nagar" height={50} src={'/assets/profile2.jpg'} className="rounded-circle me-2"/> { 'Rajendra Nagar' } </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto  mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#"> {'Home'} </a>
                    </li>
                     <li className="nav-item">
                     <a className="nav-link" href="#"> {'About Me'} </a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#"> {'Blogs'} </a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#"> {'Projects'} </a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#"> {'Coffee with me'} </a>
                    </li>
                </ul>
                <span className="navbar-text fw-bold highlight-text">
                I Am Available For Freelancer.
                </span>
                </div>
            </div>
        </nav>
        </>
    )
}