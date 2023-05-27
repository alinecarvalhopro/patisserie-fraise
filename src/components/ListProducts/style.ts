import styled from "styled-components";

export const StyledDiv = styled.div`

margin-top: 100px;

background-color: var(--color-backgound-2);

.wordCake,
.wordPie {
    width: 126px;

    margin: 40px 0 0 16px;
 }

ul {
    display: flex;

    overflow-x: auto;
}

@media (min-width: 1000px) {
    .wordCake,
    .wordPie {
    margin: 40px 0 0 100px;
}

    ul {
        margin: 0 84px;

        flex-wrap: wrap;

        overflow: none;
    }
}

`