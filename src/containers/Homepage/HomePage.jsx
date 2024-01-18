import React from "react";
import { CategoryBar, NavBar } from "../../components/molecules/";

const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <NavBar />
        <CategoryBar />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
