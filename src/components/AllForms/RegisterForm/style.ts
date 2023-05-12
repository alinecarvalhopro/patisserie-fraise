import styled from "styled-components";

export const StyledDiv = styled.div`
width: calc(100% - 32px);

.boxForm {

    border: 1px solid var(--color-secundary);
    border-radius: 5px;

    padding: 16px;

    display: flex;
    flex-direction: column;
}

form {
    width: 100%;
}


button {
    width: 100%;
    height: 40px;

    margin: 16px 0;
    
    border: none;

    background-color: var(--color-secundary);
    border-radius: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.8s
}

button:hover {
    background-color: var(--color-primary);
}

@media (min-width: 769px) {
    width: 363px;
}
`