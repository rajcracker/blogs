

import "@fontsource/karla";
import Article from "./components/Article";
import Freelance from "./components/freelance";

export default async function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajendranagar - Freelance Web Solutions",
    "url": "https://rajendranagar.co.in/",
    "image": "https://rajendranagar.co.in/assets/profile2.jpg",
    "description": "I am a freelance developer providing web solutions with expertise in Vue.js and Laravel. I specialize in building modern, scalable, and efficient websites for businesses.",
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed"
    },
    "knowsAbout": [
      "Vue.js",
      "Laravel",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "E-Commerce Websites",
      "CMS Solutions"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "sharkweb.in@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/in/rajendra-nagar-464580170/",
      "https://github.com/rajcracker"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      /> 
   {/* <Banner/> */}
    <div className="container">
      <main>
        <Article/>
      </main>
    </div>
    <div className="container-fluid">
    <Freelance/>
    </div>
    </>
  );
}
