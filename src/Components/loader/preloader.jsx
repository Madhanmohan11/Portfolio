import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper>
      {loadingComplete ? (
        <h1 className="welcome-text">Welcome...😉</h1>
      ) : (
        <div className="loader-wrapper">
          <div className="loader" style={{ width: `${progress}%` }} />
          <span className="progress">{progress}%</span>
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: black;

  .loader-wrapper {
    position: relative;
    width: 90%;
    max-width: 400px;
  }

  .loader {
    height: 4.8px;
    display: inline-block;
    background: #54f98d;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
  }

  .progress {
    position: absolute;
    right: 0;
    top: -20px;
    color: #54f98d;
    font-size: 14px;
    font-family: Arial, sans-serif;
  }

  .welcome-text {
    color:white;
    font-size: 4rem;
    font-family: Arial, sans-serif;
  }

  @media (max-width: 768px) {
    .progress {
      font-size: 12px;
      top: -15px;
    }
    .welcome-text {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .loader-wrapper {
      max-width: 300px;
    }
    .progress {
      font-size: 10px;
      top: -12px;
    }
    .welcome-text {
      font-size: 2rem;
    }
  }
`;

export default Loader;
