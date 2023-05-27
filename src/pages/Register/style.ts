import styled from "styled-components";

export const StyledDiv = styled.div`
height: 100%;

display: flex;
flex-direction: column;
align-items: center;

img {
    width: 170px;

    margin-top: 20px;
}

.box {
    width: calc(100% - 32px);

    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    margin-top: 20px;
    margin-bottom: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: var(--color-primary);
}

a {
    width: 100%;
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

p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-greyScale-200);
    text-align: center;
}


@media (min-width: 1000px) {
    flex-direction: row-reverse;

    margin-top: 120px;

    img {
        width: 300px;

        margin: 0;
    }

    .box {
    width: 50%;

    margin-left: 100px;
    }

    .boxImg {
    width: 50%;

    display: flex;
    align-items: center;
}
}

@media (min-width: 1000px) {
    img {
        width: 300px;
    }

    h2 {
        font-size: 25px;
    }
}


`