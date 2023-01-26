import React, {useState, useEffect} from "react";
import {Card, FormField, Loader} from '../components'

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328]">The Community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">Introducing new profound facial AI program that allows users the ability to fetch any randomly generated images.</p>
      </div>

      <div className="mt-16">
        <FormField/>
      </div>
    </section>
  )
};

export default Home;
