import React from "react";
import {
  BodyArtcle,
  CategoryBar,
  Footer,
  NavBar,
} from "../../components/molecules/";

const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <NavBar />
        <CategoryBar />
        <BodyArtcle />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
