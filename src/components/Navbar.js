import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <NavContainer>
        <div className="head">HEALTHIFY</div>
        <div className={isNavExpanded ? "list show" : "list hide"}>
          <div className="link">Posts</div>
          <div className="link">Profile</div>
          <div className="link">Logout</div>
        </div>
        <div
          className="icon"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <GiHamburgerMenu />
        </div>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: teal;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  .head {
    padding: 1rem 2rem;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
  .list {
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 1rem 2rem;
    .link:hover {
      cursor: pointer;
      color: black;
    }
  }
  .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .hide {
      display: none;
    }
    .show {
      top: 5rem;
      gap: 2rem;
      width: 100%;
      position: absolute;
      flex-direction: column;
      align-items: flex-start;
      background-color: teal;
    }
    .icon {
      position: absolute;
      display: block;
      right: 0%;
      top: 0%;
      font-size: 1.5rem;
      padding: 1.5rem;
      &:hover {
        cursor: pointer;
        color: black;
      }
    }
  }
`;

export default Navbar;
