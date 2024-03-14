import { useState } from "react";
import scss from "./Register.module.scss";
import {
  useGetRequestQuery,
  usePostRequestMutation,
} from "../../../redux/api/request";
import { useNavigate } from "react-router";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, isLoading } = useGetRequestQuery();
  const [createPost] = usePostRequestMutation();
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (userName === "" || email === "" || password === "") {
      alert("write something");
    } else {
      const newItem = {
        _id: Math.random(),
        userName: userName,
        email: email,
        password: password,
      };
      await createPost(newItem);
      console.log(newItem);

      navigate("/login");
    }
    setEmail("");
    setPassword("");
    setUserName("");
  };

  console.log(data);
  console.log(isLoading);

  return (
    <div className={scss.Register}>
      <div className="container">
        <div className={scss.section}>
          <div className={scss.box}>
            <input
              type="text"
              placeholder="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
