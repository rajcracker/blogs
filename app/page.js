import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "@fontsource/karla";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Freelance from "./components/freelance";



export default async function Home() {
  return (
    <>
    <Header/>
   {/* <Banner/> */}
    <div className="container">
      <main>
        <Article/>
      </main>
    </div>
    <div className="container-fluid">
    <Freelance/>
    </div>
      <Footer/>
    </>
  );
}
