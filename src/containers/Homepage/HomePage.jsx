import React, { useEffect } from "react";
import {
  BodyArtcle,
  CategoryBar,
  Footer,
  NavBar,
} from "../../components/molecules/";
import Skeleton from "../../components/molecules/Skeleton/Skeleton";

const HomePage = () => {
  // document title
  useEffect(() => {
    document.title = "Blogus | Home";
  }, []);

  return (
    <React.Fragment>
      <div>
        <NavBar />
        <CategoryBar />
        <BodyArtcle />
        {/* <Skeleton /> */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
