import Navbar from "@/components/Navbar";
import RequestBox from "@/components/RequestBox";
import TrendingBox from "@/components/TrendingBox";
import styled from "@emotion/styled";
import React from "react";

const feed = () => {
  return (
    <>
      <FeedContainer>
        <Navbar />
        <div className="main">
          <div className="col col1">
            <div className="profile">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <span className="name">ANKUR YADAV</span>
            </div>
            <div className="activity">
              <span className="request">Requests 10</span>
              <span className="accepted">Accepted 7</span>
            </div>
            <div className="manage">Manage Consultations</div>
          </div>
          <div className="col2">
            <RequestBox />
            <RequestBox />
            <RequestBox />
          </div>
          <TrendingBox />
        </div>
      </FeedContainer>
    </>
  );
};

const FeedContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    overflow-y: scroll;
    .col {
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background-color: var(--secondary);
    }
    .col1 {
      width: 40%;
      padding: 1rem;
      .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        border-bottom: 1px solid;
        img {
          width: 5rem;
          height: 5rem;
          border-radius: 3rem;
        }
      }
      .activity {
        padding: 1rem 0;
        gap: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-bottom: 1px solid;
      }
      .manage {
        padding: 1rem 0;
        text-align: center;
      }
    }
    .col2 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default feed;
