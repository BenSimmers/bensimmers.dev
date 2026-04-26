import React from "react";
import { Title } from "../components/Title";

const Wrapper: React.FunctionComponent = () => (
  <div className="container mx-auto flex justify-center px-4 py-16 sm:px-6 lg:px-8">
    <div className="w-full max-w-5xl">
      <Title />
    </div>
  </div>
);

export default Wrapper;
