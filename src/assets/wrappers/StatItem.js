import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--first-color);
  padding: 2rem;
  border-radius: 5px;
  border-bottom: 5px solid ${(props) => props.color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .count {
      font-weight: var(--font-bold);
      font-size: var(--biggest-font-size);
      color: ${(props) => props.color};
    }
    .icon {
      font-size: var(--h1-font-size);
      color: ${(props) => props.color};
      background-color: ${(props) => props.bcg};
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
  }

  .title {
    font-family: var(--h1-font);
    font-weight: var(--font-medium);
    font-size: var(--h3-font-size);
    margin-top: 1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;

export default Wrapper;
