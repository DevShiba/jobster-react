import styled from "styled-components";

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--first-color);

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;

    .toggle-btn {
      background: transparent;
      border-color: transparent;
      font-size: 1.75rem;
      color: var(--white-color);
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      width: 100px;
    }

    .logo-text {
      font-size: var(--h3-font-size);
      text-transform: capitalize;
      display: none;
      margin: 0;
    }

    .btn-container {
      position: relative;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 0.5rem;
        position: relative;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
        font-size: var(--normal-font-size);
        text-transform: capitalize;
        background-color: var(--second-color);
        color: var(--white-color);
        padding: .3rem;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
      }

      .dropdown {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        background: var(--second-color);
        box-shadow: var(--shadow-2);
        padding: 0.5rem;
        text-align: center;
        visibility: hidden;
        border-radius: 5px;
    

        .dropdown-btn {
          background: transparent;
          border-color: transparent;
          color: var(--white-color);
          font-size: var(--normal-font-size);
          letter-spacing: 1px;
          text-transform: capitalize;
          cursor: pointer;
        }
      }

      .show-dropdown {
        visibility: visible;
      }
    }
  }

  @media (min-width: 992px) {
    .nav-center {
      width: 90%;

      .logo {
        display: none;
      }

      .logo-text {
        display: block;
      }
    }
  }
`;
export default Wrapper;
