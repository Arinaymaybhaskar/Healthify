import styled from "@emotion/styled";
import React from "react";

const Array = [
  "Ankur",
  "Anime",
  "Anuj",
  "Ankur",
  "Anime",
  "Anuj",
  "Ankur",
  "Anime",
  "Anuj",
  "Ankur",
];

const TrendingBox = () => {
  return (
    <>
      <Container>
        <div className="title">Trending Specialist</div>
        {Array.map((name, index) => {
          return (
            <>
              <div className="doctor">
                <span className="index">{index + 1}.</span>
                <span>{name}</span>
              </div>
            </>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: var(--secondary);
  .title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .doctor {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .index {
      width: 10%;
    }
  }
`;

export default TrendingBox;
