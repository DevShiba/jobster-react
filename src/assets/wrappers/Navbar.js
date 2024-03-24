import styled from "styled-components";

const Wrapper = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--first-color);
  padding: 1.6rem 0;
  box-shadow: 0px 1px 0px 0px rgba(100, 100, 100, 0.1);

  .nav {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toggle-btn {
      font-size: 1.6rem;
      color: var(--title-color);
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      transition: var(--transition);
    }

    .logo-text {
      display: none;
      font-size: 1.6rem;
      color: var(--title-color);
    }

    .logo {
      width: 120px;
    }

    .btn-container {
      position: relative;

      .btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        padding: 0.2rem 0.5rem;
        border: none;
        border-radius: 2px;
        background-color: var(--second-color);
        color: var(--title-color);
      }

      .dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        width: 10rem;
        background-color: var(--first-color);
        border-radius: 0.5rem;
        box-shadow: var(--dark-shadow);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
      }
    }

    @media (min-width: 992px) {
      position: sticky;

      .logo {
        display: none;
      }

      .logo-text {
        display: block;
        font-size: var(--h3-font-size);
        text-transform: capitalize;
        color: var(--title-color);
      }
    }
  }
`;

export default Wrapper;
