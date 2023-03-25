import CurrentPost from "@/components/CurrentPost";
import Navbar from "@/components/Navbar";
import OfferBox from "@/components/OfferBox";
import TrendingBox from "@/components/TrendingBox";
import styled from "@emotion/styled";
import React from "react";

const post = () => {
  return (
    <>
      <PostContainer>
        <Navbar />
        <div className="main">
          <div className="col">
            {true ? (
              <>
                <CurrentPost />
                <div className="manage">
                  <div className="sort">
                    SORT BY
                    <span>Low to High</span>
                    <span>Hight to Low</span>
                    <span>Latest</span>
                  </div>
                  <span className="count">15 OFFERS</span>
                </div>
                <div className="offers">
                  <OfferBox />
                  <OfferBox />
                  <OfferBox />
                  <OfferBox />
                  <OfferBox />
                  <OfferBox />
                  <OfferBox />
                  <OfferBox />
                </div>
              </>
            ) : (
              <div className="post"></div>
            )}
          </div>
          <TrendingBox />
        </div>
      </PostContainer>
    </>
  );
};

const PostContainer = styled.div`
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
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    overflow-y: scroll;
    .col {
      width: 120rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .current-post {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: var(--secondary);
        width: 100%;
        padding: 1rem;
      }
      .manage {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sort {
          display: flex;
          gap: 1rem;
          span:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .offers {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
      .post {
      }
    }
  }
`;

export default post;
