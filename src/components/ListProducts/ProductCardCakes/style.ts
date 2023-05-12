import styled from "styled-components";

export const StyledLi = styled.li`

margin: 16px;

border-radius: 5px;

transition: 0.8s;

img {
    width: 250px;
    height: 250px;

    object-fit: cover;

    border-radius: 5px;
}

img:hover {
    
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

p {
    width: 250px;

    margin-top: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-greyScale-200);
}

`