import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .desktop-img {
    display: none;
  }
  @media screen and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    .desktop-img {
      display: inline;
      width: 50%;
      height: 100vh;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;

  .mobile-img {
    width: 300px;
    height: 300px;

    margin-top: 20px;

    border: solid 2px var(--orange);

    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--ligth-blue-1);

    margin-bottom: 20px;
    width: 100%;
  }

  button {
    max-width: 400px;
    height: 15%;
    border-radius: 8px;
  }

  @media screen and (min-width: 1100px) {
    .mobile-img {
      display: none;
    }

    .text-content {
      width: 600px;
    }

    button {
      height: 10%;
    }
  }
`;
