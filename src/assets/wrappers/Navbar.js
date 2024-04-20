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
        -webkit-box-align: center;
        -webkit-box-pack: center;
        justify-content: center;
        gap: 0.5rem;
        font-size: 1rem;
        padding: 0.2rem 0.5rem;
        border: none;
        border-radius: 2px;
        background-color: var(--second-color);
        color: var(--title-color);
        text-transform: capitalize;

        gap: 0px 0.5rem;
        position: relative;
        cursor: pointer;
      }

      .dropdown {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        background: var(--second-color);
        box-shadow: var(--shadow-2);
        padding: 0.7rem 0.5rem;
        text-align: center;
        visibility: hidden;
        border-radius: 3px;

        .dropdown-btn {
          background: transparent;
          border-color: transparent;
          color: var(--white-color);
          letter-spacing: 1px;
          font-weight: var(--font-bold);
          text-transform: capitalize;
          cursor: pointer;
        }
      }

      .show-dropdown {
        visibility: visible;
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
