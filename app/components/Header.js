import Image from "next/image";

export default function Header() {
    return (
        <>
         <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="#">{ 'Rajendra Nagar' } </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#"> <i class="bi bi-facebook"></i> </a>
                    </li>
                     <li className="nav-item">
                     <a className="nav-link" href="#"> <i class="bi bi-linkedin"></i> </a>
                    </li>
                </ul>
                {/* <span className="navbar-text">
                    Navbar text with an inline element
                </span> */}
                </div>
            </div>
        </nav>
        </>
    )
}