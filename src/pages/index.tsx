import Button from "@/atoms/button/Button";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <h1>Heading H1</h1> <br />
      <h2>Heading H2</h2> <br />
      <h3>Heading H3</h3> <br />
      <h4>Heading H4</h4> <br />
      <h5>Heading H5</h5> <br />
      <h6>Heading H6</h6> <br />
      <Button text="Cryptopay" />
    </>
  );
};

LandingPage.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};

export default LandingPage;
