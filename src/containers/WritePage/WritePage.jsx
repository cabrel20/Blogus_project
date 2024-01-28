import React, { useEffect } from "react";

const WritePage = () => {
  // document title
  useEffect(() => {
    document.title = "Blogus | Writing";
  }, []);

  return <div>WritePage</div>;
};

export default WritePage;
