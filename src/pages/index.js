import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const router = useRouter();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      router.push("/signup");
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">HEALTHIFY</div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Sign In</button>
          <span>
            Don't have an account ? <Link href="/signup">CREATE ONE</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgcolor);
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    border-radius: 0.5rem;
    padding: 2rem 4rem;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .brand {
      font-size: 3rem;
      text-align: center;
    }
    input {
      background-color: transparent;
      padding: 1rem;
      border: none;
      border-bottom: 1px solid;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border-bottom: 2px solid grey;
        outline: none;
      }
    }
    button {
      background-color: var(--primary);
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: darkgray;
      }
    }
    span {
      text-transform: uppercase;
      a {
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default Home;
