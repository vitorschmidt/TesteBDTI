import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--ligth-blue);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 250px;
  height: 250px;
  padding: 16px;
  margin-bottom: 15px;
  margin-right: 20px;
  box-shadow: 2px 0px 21px 0px rgba(0, 0, 0, 0.25);

  p {
    max-width: 180px;
    overflow-y: scroll;
  }

  .br {
    border: solid 1px var(--orange);
    width: 80%;
  }

  .check {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;

    h3 {
      margin-right: 10px;
    }
  }

  .completed-task {
    color: var(--green);
  }

  .incompleted-task {
    color: var(--red);
  }
  @media screen and (min-width: 1100px) {
    p {
      overflow: hidden;
    }
  }
`;

export const Buttons = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;

  .done {
    margin: 5px;
    font-size: 1rem;
    width: 100px;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--green);
  }

  .delete {
    margin: 5px;
    font-size: 1rem;
    width: 100px;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--red);
  }

  .edit {
    margin: 5px;

    width: 100px;
    font-size: 1rem;
    width: 100px;
    border-radius: 8px;
  }
`;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;

  .ModalTitle {
    display: flex;
    flex-direction: row;
  }

  h2 {
    margin-right: 20px;
  }

  h2,
  h3,
  input {
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .closeModal {
    background: none;
    color: #000;
    font-size: 20px;
  }

  .editModal {
    height: 40px;
    border-radius: 8px;
  }
`;
