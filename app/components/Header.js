"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
export default function Header() {
    const path = usePathname();
    useEffect(() => {
        typeof document !== undefined
          ? require('bootstrap/dist/js/bootstrap.bundle.min.js') // Includes Popper.js
          : null;
      }, []);
      const handleRouteChange = () => {
        // Programmatically close the menu if it's open
        const navbarCollapse = document.getElementById('navbarText');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
    }
    return (
       
        <>
         <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand fs-4" href="/"><Image width={50} alt="Rajendra Nagar" height={50} src={'/assets/profile2.jpg'} className="rounded-circle me-2"/> { 'Rajendra Nagar' } </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto  mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${path === '/' ? 'highlight-text': ''}`} href="/"> {'Home'} </Link>
                    </li>
                     <li className="nav-item">
                     <Link className={`nav-link ${path === '/about' ? 'highlight-text': ''}`} href="/about"> {'About Me'} </Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${path === '/blogs' ? 'highlight-text': ''}`} href="/blogs"> {'Blogs'} </Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${path === '/projects' ? 'highlight-text': ''}`} href="/projects"> {'Projects'} </Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${path === '/contact' ? 'highlight-text': ''}`} href="/contact"> {'Coffee with me'} </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}