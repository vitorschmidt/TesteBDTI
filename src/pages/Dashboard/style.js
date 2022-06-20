import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--ligth-blue-1);

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
    max-width: 700px;
  }

  .logout {
    margin-top: 30px;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  input {
    height: 40px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    border: none;
  }

  .addTask {
    height: 45px;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 10px;
  }

  .filterButtons {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    max-width: 700px;
  }

  .cards {
    display: flex;
    width: 80%;
    max-width: 400px;
    overflow-x: scroll;
  }

  .allTasks {
    margin-bottom: 20px;
    height: 40px;
    font-size: 0.8rem;
    margin-right: 5px;
    margin-left: 5px;

    border-radius: 8px;
  }
  @media screen and (min-width: 1100px) {
    .cards {
      max-width: 100%;
      overflow: hidden;

      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 900px;
    }
    h2 {
      font-size: 30px;
    }
    .allTasks {
      font-size: 1rem;
    }
  }
`;
