import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidheart } from "@fortawesome/free-solid-svg-icons";
const Like = (props) => {
  return (
    <>
      {props.liked ? (
        <FontAwesomeIcon
          icon={solidheart}
          color="red"
          onClick={props.onLiked}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={emptyHeart}
          onClick={props.onLiked}
          cursor={"pointer"}
        />
      )}
    </>
  );
};

export default Like;
