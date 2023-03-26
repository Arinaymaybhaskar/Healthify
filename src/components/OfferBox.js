import styled from "@emotion/styled";
import React from "react";
import { FcOk } from "react-icons/fc";
import Link from "next/link";

const OfferBox = () => {
  return (
    <>
      <Container>
        <div className="head">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />
            <span className="name">Ankur Yadav</span>
          </div>
          <span className="price">$200</span>
        </div>
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          consectetur magni soluta eveniet deserunt possimus aliquam molestias
          sapiente alias corporis, quis nesciunt ipsa quisquam totam? Est natus
          inventore vel.
        </div>
        <div className="foot">
          <div className="btn">
            <FcOk />
            <Link href="/patient/checkout"><span>Accept</span></Link>
            
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  div {
    width: 100%;
    padding: 0.5rem;
  }
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    .profile {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
      }
      .name {
        padding-left: 0.5rem;
      }
    }
    .price {
      text-align: center;
      font-size: 2rem;
      padding: 0.25rem 1rem;
    }
  }
  .foot {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: fit-content;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: grey;
        cursor: pointer;
      }
      span {
        font-size: 1rem;
        padding-left: 0.5rem;
      }
    }
  }
`;

export default OfferBox;
