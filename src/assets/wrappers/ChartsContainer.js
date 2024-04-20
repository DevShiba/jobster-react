import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    font-family: var(--h1-font);
  }

  button {
    background-color: transparent;
    border: none;
    align-self: center;
    margin-top: 1.5rem;
    cursor: pointer;
    color: var(--second-color);
    font-size: var(--h4-font-size);
  }
`;

export default Wrapper;
