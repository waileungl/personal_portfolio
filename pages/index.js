import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
    </Layout>
  );
};
export default Index;
