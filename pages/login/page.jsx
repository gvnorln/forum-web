// LoginPage.jsx
"use client";

import React, { useState } from "react";
import styles from "./loginForm.module.css";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!username || !password) {
      return;
    }

    try {
      const response = await axios.post("/api/users/login", {
        username,
        password,
      });

      if (response.data.success) {
        // Simpan token di session storage
        sessionStorage.setItem('token', response.data.token);

        // Redirect ke halaman dashboard
        window.location.href = "/dashboard";
      } else {
        setError("Username atau Password tidak valid!");
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.bigforumLogin}>
      <div className={styles.divdFlex}>
        <div className={styles.divpositionRelative}>
          <div className={styles.divcol}>
            <b className={styles.BigForum} style={{ left: "180px" }}>
              BigForum
            </b>
            <img
              className={styles.asetIconLoginpng}
              alt=""
              src="/images/aseticonloginpng@2x.png"
            />
            <img
              className={styles.asetLoginKiripngIcon}
              alt=""
              src="/images/asetloginkiripng@2x.png"
            />
          </div>
          <div className={styles.divcol1}>
            <div className={styles.divdFlex1}>
              <div className={styles.divdFlex2}>
                <img
                  className={styles.bigGroupWhitepngIcon}
                  alt=""
                  src="/images/big-group-whitepng@2x.png"
                />
              </div>
              <div className={styles.ptextCenter}>
                <b className={styles.loginToBig}>Login to BIGForum</b>
              </div>

              <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{
                      paddingLeft: "20px",
                      border: "none",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <input
                    type="password"
                    style={{
                      paddingLeft: "20px",
                      border: "none",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input1}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.button}
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      width: "565px",
                      color: "white",
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className={styles.ptextCenter1}>
                {formSubmitted && error && (
                  <span
                    style={{
                      width: "300px",
                      marginTop: 30,
                      marginBottom: 20,
                      color: "black",
                      backgroundColor: "#D37676",
                      borderRadius: 10,
                    }}
                  >
                    {error}
                  </span>
                )}
              </div>
            </div>
            <img
              className={styles.asetLoginKananpngIcon}
              alt=""
              src="/images/asetloginkananpng@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
