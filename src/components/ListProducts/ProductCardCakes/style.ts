import styled from "styled-components";

export const StyledLi = styled.li`

margin: 16px;

border-radius: 5px;

transition: 0.8s;

:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

img {
    width: 250px;
    height: 250px;

    object-fit: cover;

    border-radius: 5px;
}

.content {
    width: 230px;
    height: 80px;

    border-radius: 5px;

    padding: 10px;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h3 {
    width: 230px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: var(--color-primary);
}

.priceButtonBox {
    display: flex;
    justify-content: center;
    align-items: flex-end
}

p {
    width: 250px;

    margin-top: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-greyScale-200);
}

.buttonAddBag {
    width: 180px;
    height: 28px;

    padding: 0 5px;
    
    border: none;

    background-color: var(--color-greyScale-200);
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

.buttonAddBag:hover {
    background-color: var(--color-primary);
}

`