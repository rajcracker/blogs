import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


export const metadata = {
  title: "Rajendra Nagar - Experienced Full Stack Developer | JavaScript, Vue.js, React, Laravel Specialist",
  description: "Experienced Full Stack Developer | JavaScript, Vue.js, React, Laravel Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
