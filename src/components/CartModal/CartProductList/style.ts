import styled from "styled-components";

export const StyledDiv = styled.div`
   display: flex;
   flex-direction: column;

   ul {
      margin: 16px 16px 0 16px;
      display: flex;
      flex-direction: column;

      overflow: auto;
   }

   .totalBox {
      margin: 16px;

      padding: 20px 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

   }

   .totalProducts {
      color: var(--color-greyScale-200);
   }

   .totalPrice {
      color: var(--color-greyScale-200);
   }

   .finalizeOrder {
      width: 100%;
      height: 60px;

      border: none;
      border-radius: 0 0 5px 5px;

      background-color: var(--color-greyScale-300);
      
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: white;

      transition: 0.8s;
   }
   
   .finalizeOrder:hover {
      background-color: var(--color-primary);
   }

   @media (min-width: 1000px) {
      ul {
         height: 200px;
      }
   }

   `;
