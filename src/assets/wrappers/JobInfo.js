import styled from "styled-components";

const Wrapper = styled.div`
  font-size: var(--normal-font-size);
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    color: var(--second-color);
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }
  .text {
    color: var(--white-color);
    text-transform: capitalize;
  }
`;

export default Wrapper;
