import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";
import Playground from "../src/components/Playground";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Playground />
      <Contact />
    </Layout>
  );
};
export default Index;
