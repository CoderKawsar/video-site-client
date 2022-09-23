import React from "react";
import Pagination from "../components/ui/Pagination";
import Tags from "../components/Tags/Tags";
import Videos from "../components/Videos/Videos";

function Home() {
  return (
    <>
      <Tags></Tags>
      <Videos></Videos>
      <Pagination></Pagination>
    </>
  );
}

export default Home;
