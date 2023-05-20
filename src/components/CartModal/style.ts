import styled from "styled-components";

export const StyledDiv = styled.div`
width: 100%;
height: 100%;

background-color: rgba(51, 51, 51, .5);

position: fixed;
top: 0;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.containerDialog {
    width: calc(100% - 32px);
    
    border-radius: 5px;
    
    background-color: white;
}

header {
    width: 100%;
    height: 60px;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    margin: 16px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: var(--color-primary);
}

.closeModal {
    margin: 16px;

    border: none;

    background-color: white;

    color: var(--color-greyScale-300);
    font-size: 22px;
}

.withoutProducts {
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.withoutProducts > h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: var(--color-greyScale-200);
}

.withoutProducts > button {
    margin: 16px;

    border: none;

    background-color: white;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: var(--color-primary);

}

@media (min-width: 1000px) {
    .containerDialog {
    width: 600px;
    height: 400px;

    background-color: white;
}

h2 {
    font-size: 22px;
}
}
`