import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100%;

background-color: white;

display: flex;
justify-content: space-between;
align-items: center;

img {
    width: 100px;

    margin: 16px;
}

a {
    width: 60px;
    height: 20px;

    margin: 16px;
    
    border: none;

    background-color: #F79571;
    border-radius: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    text-decoration: none;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.8s
}

@media (min-width: 1000px) {
    img {
        width: 150px;

        margin-left: 100px;
    }

    a {
        width: 80px;
        height: 30px;

        font-size: 14px;

        margin-right: 100px;
    }
}

`