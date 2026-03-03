import "../../App.css";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Home() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Header />
        <Feature />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
