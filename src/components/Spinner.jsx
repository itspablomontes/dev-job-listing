import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#2563eb"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default spinner;