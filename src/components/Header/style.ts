import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
height: 100px;

margin-bottom: 20px;

background-color: white;

box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

position: fixed;
left: 0;
top: 0;

display: flex;
justify-content: space-between;
align-items: center;

img {
    width: 164px;

    margin-left: 16px;
}

div {
    display: flex;
    align-items: center;
}

.bag {
    width: 50px;

    margin: 10px;
}

.buttonBag {
    padding: 0;
}

.buttonLeave {
    width: 45px;
    height: 30px;

    margin-right: 16px;
    
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

.buttonLeave:hover {
    background-color: var(--color-greyScale-200);
}

@media (min-width: 1000px) {
    img {
        margin-left: 100px;
    }

    .bag {
        width: 80px;
    }

    .buttonLeave {
        width: 50px;
        height: 30px;

        margin-right: 100px;
    }
}

`