import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--first-color);
    border-radius: 5px;
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: var(--font-bold);
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: 5px;
    cursor: pointer;
  }
  .active {
    background: var(--second-color);
    color: var(--white-color);

  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    background: var(--second-color);
    border-color: transparent;
    border-radius: 5px;
    color: var(--white-color);
    text-transform: capitalize;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: background 0.4s;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--second-color-alt);
  }
`;
export default Wrapper;
