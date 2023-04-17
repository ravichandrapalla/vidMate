import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>MovieForm {id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/movies", { replace: true })}
      >
        Save
      </button>
    </>
  );
};

export default MovieForm;
