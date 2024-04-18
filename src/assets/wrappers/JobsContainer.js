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
    gap: 2rem;

    @media (min-width: 770px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Wrapper;
