import React from "react";
import "../../styles/comments.css";

const Comments = ({ profileImg, username, tittle, date, body }) => {
  return (
    <>
      <div className="comment-header d-flex my-4 mx-3 mx-md-5 ">
        <img className="profile" src={profileImg} alt="" />
        <div>
          <h5 className="tittle">"{tittle}"</h5>
          <span className="username fs-5">@{username}</span>
        </div>
        <span className="date float-end">{date}</span>
      </div>

      <div className="body mx-3 mx-md-5">{body}</div>
    </>
  );
};

export default Comments;
