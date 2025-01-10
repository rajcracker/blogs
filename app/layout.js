
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  title: "Expert Full-Stack Developer for Web Solutions | Contact: +91 9950105566",
  description:
    "Looking for professional web development? I specialize in Laravel, Vue.js, and React to build custom web solutions like e-commerce sites and CMS. Call me now at +91 9950105566 for your next project!",
  keywords: ["Vue.js Developer", "Full-Stack Web Developer", "Laravel Expert", "Custom Web Development"],
  metadataBase: new URL("https://www.rajendranagar.co.in/"),
  alternates: {
    canonical: "https://www.rajendranagar.co.in/",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
