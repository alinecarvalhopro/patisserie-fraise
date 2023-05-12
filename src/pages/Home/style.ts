import styled from "styled-components";

export const StyledDiv = styled.div`

background-color: var(--color-backgound-2);

.wordCake,
.wordPie {
    width: 126px;

    margin: 16px 0 0 16px;
}

@media (min-width: 1000px) {
    .wordCake,
    .wordPie {
    margin: 32px 0 0 100px;
}
}
`