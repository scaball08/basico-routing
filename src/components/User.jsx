import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const userJson = await resUser.json();
    setUser(userJson);
  };

  return (
    <div className="row">
      <div className="col-md-6 col-lg-4 col-sm-12">
        <div className="card mt-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{user.title}</h5>
            <p className="card-text">{user.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
