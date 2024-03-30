import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 0px 0px rgba(100, 100, 100, 0.2);
  background-color: var(--first-color);

  .title {
    font-size: var(--h1-font-size);
    color: var(--title-color);
    margin-bottom: 1.5rem;
    font-family: var(--h1-font);
    font-weight: var(--font-medium);
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .form-center {
    display: grid;
    gap: 1rem;

    .form-row {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .form-label {
        font-size: var(--normal-font-size);
        color: var(--white-color-2);
        font-weight: var(--font-medium);
        letter-spacing: 1px;
        text-transform: capitalize;
      }

      .form-input {
        padding: 0.6rem;
        border-radius: 3px;
        border: none;
        background-color: var(--background-color);
        color: var(--white-color);
      }
    }

    .btn {
      font-size: var(--normal-font-size);
      text-transform: capitalize;
      font-family: var(--body-font);
      padding: 0.4rem 0.5rem;
      border: none;
      border-radius: 2px;
      background-color: var(--second-color);
      color: var(--title-color);
    }
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1050px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .btn {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
