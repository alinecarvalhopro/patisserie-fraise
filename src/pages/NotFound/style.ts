import styled from "styled-components";

export const StyledDiv = styled.div`

padding: 16px;

display: flex;
align-items: center;

div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 280px;

    margin-top: 70px;

}

a {
    width: 280px;
    height: 40px;

    margin: 16px 0;
    
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

a:hover {
    background-color: var(--color-greyScale-200);
}

@media (min-width: 1000px) {
    img {
        width: 350px;
    }

    a {
        width: 350px;
    }
}

`