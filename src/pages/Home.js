import React, { useEffect } from "react";
import styled from "styled-components";
import lineChart from "../img/chart.gif";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  background-color: #add8e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    border-radius: 50%;
    overflow: hidden;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin-bottom: 30px;
  margin-top: -6px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  color: #555;
  font-size: 1.2em;
  line-height: 1.6;
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home";

    return () => {
      document.title = "Home";
    };
  }, []);

  return (
    <>
      <Container>
        <Title>Chart JS - poc!</Title>
        <img src={lineChart} alt="Line Chart" width="180" height="180" />
        <Paragraph>
          Interactive dashboard with chart js
        </Paragraph>
      </Container>
    </>
  );
};

export default Home;
