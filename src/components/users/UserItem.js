import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //state = {
  // id: "id",
  // login: "yanuarsukwandi",
  //  avatar_url: "https://avatars0.githubusercontent.com/u/51881128?v=4",
  //  html_url: "https://github.com/yanuarsukwandi"
  // };

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      ></img>

      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
