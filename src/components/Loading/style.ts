import styled from "styled-components";

export const StyledDiv = styled.div`
width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

img {
    width: 250px;
    
    margin-top: 150px;
}

@media (min-width: 1000px) {

    img {
        width: 300px;
    }
}

`