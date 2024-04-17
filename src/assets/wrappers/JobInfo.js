import styled from "styled-components";

const Wrapper = styled.div`
  font-size: var(--normal-font-size);
  display: flex;
  gap: 1rem;

  .icon {
    color: var(--second-color);
  }
  .text {
    color: var(--white-color);
   text-transform: capitalize;
  }
`;

export default Wrapper;
