

import "@fontsource/karla";
import Article from "./components/Article";
import Freelance from "./components/freelance";

export default async function Home() {
  return (
    <>
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
