import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
--color-primary: #B61739;
--color-secundary: #EEC8BB;
--color-details: #F79571;

--color-greyScale-100: #1E1E1E;
--color-greyScale-200: #496460;
--color-greyScale-300: #97A7A4;
--color-greyScale-400: #D9D9D9;

--color-backgound-1: #ffffff;
--color-backgound-2: #F9EEEB;
}

body {
    font-family: 'Nunito', sans-serif;
}

input {
    cursor: text;
}

button {
	cursor: pointer;
}

input:disabled, button:disabled {
cursor: not-allowed
}

.productName {
	width: 100px;

	font-size: 12px;
}

@media(min-width: 1000px) {
.productName {
	width: 350px;
	font-size: 16px;
}
}

`