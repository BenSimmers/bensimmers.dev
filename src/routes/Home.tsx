import React from "react";
import { Title } from "../components/Title";
// min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]
const Wrapper: React.FunctionComponent = () => (
  <div
    className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-8 sm:py-12"
  >
    <div className="flex justify-center flex-col w-full">
      <Title />
    </div>
  </div>
);

export default Wrapper;
