import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-neutral-300">Coming soon! Check back for articles and updates.</p>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
