import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      if (username.length <= 0) {
        console.log("Please enter username");
      }

      if (password.length <= 0) {
        console.log("Please enter password");
      }

      if (
        username === "hunter.monaghan@tekletics.com" &&
        password === "Abc123!"
      ) {
        router.push("/gamesList");
      } else {
        alert("Invalid Username or Password");
      }

      console.log("LOGGED IN");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login to GameStop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>GameStop</span>
        </h1>

        <div className={styles.formContainer}>
          <form className={styles.form}>
            <label className={styles.label}>
              <input
                type="text"
                onChange={handleUsernameChange}
                className={styles.input}
                placeholder="Enter your username"
              />
            </label>
            <label className={styles.label}>
              <input
                type="password"
                onChange={handlePasswordChange}
                className={styles.input}
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className={styles.button}
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by <span className={styles.highlight}>Hunter Monaghan</span>
        </p>
      </footer>
    </div>
  );
}
