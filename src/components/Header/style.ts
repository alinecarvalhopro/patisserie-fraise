import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;

margin-bottom: 20px;

background-color: white;

position: fixed;
left: 0;
top: 0;

display: flex;
justify-content: space-between;
align-items: center;

img {
    width: 164px;

    margin: 16px;
}

button {
    width: 60px;
    height: 30px;

    margin: 16px;
    
    border: none;

    background-color: var(--color-greyScale-300);
    border-radius: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.8s
}

button:hover {
    background-color: var(--color-greyScale-200);
}

@media (min-width: 1000px) {
    img {
        margin-left: 100px;
    }

    button {
        width: 87px;
        height: 40px;

        margin-right: 100px;
    }
}

`