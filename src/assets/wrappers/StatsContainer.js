import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export default Wrapper