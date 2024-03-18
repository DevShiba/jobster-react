import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    display: flex;
    padding: 2rem 0;
  }

  .page {
    min-height: calc(100vh - var(--header-height));
    margin-top: -3rem;
    display: grid;
    align-items: center;

    .info {
      h1 {
        font-size: var(--biggest-font-size);
        margin-bottom: 1rem;
        text-transform: capitalize;
        font-family: var(--h1-font);

        span {
          color: var(--second-color);
        }
      }
      p {
        margin-bottom: 2rem;
        color: var(--white-color-2);
        max-width: 30em;
      }
      .btn-hero {
        padding: 0.5rem 1.3rem;
        font-size: 1.2rem;
        background-color: var(--second-color);
        color: var(--white-color-2);
        text-transform: capitalize;
        border-radius: 0.5rem;
        transition: background 0.3s;
        &:hover {
          background-color: var(--second-color-alt);
        }
      }
    }
    .main-img {
      display: none;
    }
  }

  @media (min-width: 850px) {
    .page {
      .main-img {
        display: block;
      }

      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
  }
`;

export default Wrapper;
