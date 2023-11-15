import React from "react";
import { useState } from "react";
import Input from '../../../components/Input'
import styles from "../../../styles/Home.module.css"
import Button from "../../../components/Button"
const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  
  const handleInputUserName = (value) => {
    setUserName(value);
  }
  const handleInputPassWord = (value) => {
    setPassWord(value);
  }
  const handleLogin = async () => {
    const postData = {
      username:userName,
      password: passWord,
    };
    try {
      const response = await axios.post(`${apiURL}`, postData, {
        withCredentials: true,
      });
      console.log("success!");
      router.push("/admin/home/");
    } catch (error) {
      console.log(error);
      setErrorMessage("EmailまたはPasswordが間違っています。")
    }
  };

  return (
    <>
    <main  className={styles["center"]}>
      <div>
        <div>
          <div className={styles["marginTop100"]}>
            <label>Email</label>
            <Input onInputChange={handleInputUserName}  type="text"/>
          </div>
          <div className={styles["marginTop10"]}>
            <label >PassWord</label>
            <Input onInputChange={handleInputPassWord}  type="password"/>
          </div>
          <div>
          {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
          <div>
          <Button onClick={handleLogin}>ログインする</Button>
          </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Login;
