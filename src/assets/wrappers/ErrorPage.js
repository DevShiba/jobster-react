import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  .img {
    width: 100%;
    max-width: 550px;
  }
  .title {
    margin: 2rem 0 0.5rem 0;
    font-size: var(--h2-font-size);
    font-weight: var(--font-medium);
  }
  .text {
    color: var(--white-color-2);
    font-size: var(--normal-font-size);
    margin-bottom: 1rem;
  }
  .link {
    color: var(--second-color);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;
