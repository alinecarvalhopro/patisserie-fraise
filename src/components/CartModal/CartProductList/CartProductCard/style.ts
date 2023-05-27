import styled from "styled-components";

export const StyledCartProductCard = styled.li`
   min-height: 60px;
   
   margin: 10px 0;

   border-radius: 5px;

   display: flex;
   align-items: center;
   
   .imageProduct {
      min-width: 40px;
      height: 40px;

      margin-right: 6px;

      object-fit: cover;

      border-radius: 5px;
   }

   .contentBox {
      width: 100%;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .quantityRemoveAll {
      display: flex;
      align-items: center;
   }
 
   .removeProduct {
      margin-left: 10px;

      padding: 0;

      border: none;

      background-color: white;
} 

.bin {
   width: 20px;
}

@media (min-width: 1000px) {
   .bin {
      width: 25px;
   }
}
`;
