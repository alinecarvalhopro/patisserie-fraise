import styled from "styled-components";

export const StyledDiv = styled.div`
width: 70px;
height: 20px;

display: flex;
justify-content: center;
align-items: flex-start;

p {
    width: 30px;
    height: 30px;

    margin-top: 4px;

    font-family: 'Inter', sans-serif;
    font-size: 14px;
    text-align: center;
}

.buttonQuantity {
    width: 20px;
    height: 20px;

    border-radius: 5px;
    border: 1px solid var(--color-secundary);

    background-color: white;

    font-size: 12px;

    transition: 0.8s;
}

.buttonQuantity:hover {
    background-color: var(--color-secundary);
}

@media(min-width: 1000px) {
width: 90px;
height: 30px;

margin-right: 16px;

p {
    width: 30px;

    margin-top: 7px;

    font-size: 16px;
}

.buttonQuantity {
    width: 30px;
    height: 30px;

    font-size: 16px;
}
}
`