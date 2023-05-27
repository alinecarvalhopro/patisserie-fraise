import styled from "styled-components";

export const StyledFieldset = styled.fieldset`

display: flex;
flex-direction: column;
align-items: flex-start;

label {

    margin: 10px 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--color-greyScale-200);
}

input {
    width: calc(100% - 20px);
    height: 40px;

    margin-bottom: 6px;

    padding-left: 16px;

    border: 1px solid var(--color-greyScale-200);
    border-radius: 5px;

    transition: 0.8s
}

input:hover,
input:focus {
    border: 1px solid var(--color-primary);
}

.messageError {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-primary);
}

`