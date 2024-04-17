import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    margin-top: 3.5rem;
    margin-bottom: 1.3rem;
    font-size: var(--h3-font-size);
    text-transform: capitalize;
    font-family: var(--h1-font);
    color: var(--second-color);
  }

  .jobs {
    display: grid;

    @media (min-width: 770px) {
      grid-template-columns: 1fr 1fr;
    }

    gap: 2rem;

    .job {
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
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

          .status {
            text-transform: capitalize;
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
    }
  }
`;

export default Wrapper;
