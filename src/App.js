import React from "react";
import "./App.css";
import Banner from "components/Banner/";
import Layout from "containers/Layout/";
import About from "components/About";
import Skills from "components/Skills";
import Blogs from "components/Blogs";

function App() {
  return (
    <Layout>
      <Banner />
      <About />
      <Skills />
      <Blogs />
    </Layout>
  );
}

export default App;
