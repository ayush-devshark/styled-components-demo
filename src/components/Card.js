import styled from 'styled-components';

const Card = () => {
    return (
        <StyledCard>
            <img
                src='https://images.unsplash.com/photo-1622495549567-07141e9c266f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                alt='Desk'
            />
            <footer>
                <h4>product name</h4>
                <p>$50</p>
            </footer>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    width: 90%;
    max-width: 300px;
    background: var(--white);
    border-radius: 0.25rem;

    img {
        width: 100%;
        border-radius: 10px;
        background-size: cover;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        h4 {
            text-transform: capitalize;
            &::before {
                content: 'Name: ';
                color: orangered;
            }
        }

        p {
            color: var(--primary);
            font-weight: 700;
        }

        &:hover {
            background-color: hotpink;
        }
    }
    transition: all 0.25s ease-in-out;
    &:hover {
        box-shadow: 0 3px 3px #222;
        cursor: pointer;
    }
    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

export default Card;
