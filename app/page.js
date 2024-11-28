import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import '@fontsource/inter/300.css'; // Light
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/700.css'; // Bold
import Article from "./components/Article";
import Footer from "./components/Footer";



export default async function Home() {
  return (
    <>
      <Banner/>
    <div className="container">
     {/* <Header/> */}
      <main>
      
        <Article/>
      </main>
    </div>
    <Footer/>
    </>
  );
}
