import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "@fontsource/tenor-sans"; // Defaults to weight 400

import Article from "./components/Article";
import Footer from "./components/Footer";



export default async function Home() {
  return (
    <>
   
    <div className="container">
    <Header/>
   
      <main>
      <Banner/>
        <Article/>
      </main>
    </div>
    <Footer/>
    </>
  );
}
