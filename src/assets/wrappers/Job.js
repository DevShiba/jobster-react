import styled from "styled-components";

const Wrapper = styled.article`
  background-color: var(--first-color);
  border-radius: 5px;

  header {
    display: flex;
    padding: 1rem 2rem;
    border-bottom: 2px solid var(--background-color);

    .main-icon {
      width: 3.5rem;
      height: 3.5rem;
      display: grid;
      place-items: center;
      font-size: var(--h3-font-size);
      background-color: var(--second-color);
      color: var(--white-color);
      border-radius: 5px;
      margin-right: 1rem;
      font-weight: var(--font-bold);
    }

    .info {
      display: grid;
      align-items: center;
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);

      p {
        color: var(--white-color-2);
      }
    }
  }

  .content {
    padding: 1.5rem 2rem;
    display: grid;
    gap: 1rem;

    .content-center {
      display: grid;
      grid-template-columns: 1fr;

      row-gap: .8rem;
      @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (min-width: 992px) {
        grid-template-columns: 1fr;
      }
      @media (min-width: 1120px) {
        grid-template-columns: 1fr 1fr;
      }

      .status {
        border-radius: 4px;
        text-transform: capitalize;
        letter-spacing: 1px;
        text-align: center;
        width: 100px;
        height: 30px;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .pending {
        background: #dcbf95;
        color: #c68c2c;
      }
      .interview {
        background: #b8c2d3;
        color: #4b5f97;
      }
      .declined {
        color: #b54949;
        background: #ddbbbb;
      }
    }

    .actions {
      display: flex;
      gap: 1rem;
      .btn {
        font-size: var(--normal-font-size);
        cursor: pointer;
        text-transform: capitalize;
        font-family: var(--body-font);
        border: none;
        border-radius: 2px;
        background-color: var(--second-color);
        color: var(--title-color);
        padding: 0.5rem 1rem;
        transition: background 0.3s;
      }

      .btn:hover {
        background-color: var(--second-color-alt);
      }
    }
  }
`;

export default Wrapper;
