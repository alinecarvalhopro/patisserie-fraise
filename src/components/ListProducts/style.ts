import styled from "styled-components";

export const StyledDiv = styled.div`

background-color: var(--color-backgound-2);

ul {
    display: flex;

    overflow-x: auto;
}

@media (min-width: 1000px) {
    ul {
        margin: 0 84px;

        flex-wrap: wrap;

        overflow: none;
    }
}

`