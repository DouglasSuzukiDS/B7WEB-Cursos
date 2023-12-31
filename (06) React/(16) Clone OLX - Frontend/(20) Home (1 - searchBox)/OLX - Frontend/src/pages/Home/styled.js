import styled from "styled-components";

export const SearchArea = styled.div`
   background-color: #BBB;
   border-bottom: #CCC;
   padding: 20px 0;

   .searchBox {
      background-color: #9BB83C;
      padding: 20px 15px;
      border-radius: 5px;
      box-shadow: 1px 1px 0.3px rgba(0, 0, 0, 0.2);
      display: flex;
   }

   form {
      flex: 1;
      display: flex;

      input, select {
         height: 40px;
         border: 0;
         border-radius: 5px;
         outline: none;
         font-size: 15px;
         color: #000;
         margin-right: 20px;
      }

      input {
         flex: 1;
         padding: 0 10px;
      }

      select {
         width: 100px;
      }

      button {
         background-color: #49AEEF;
         font-size: 15px;
         border: 0;
         border-radius: 5px;
         color: #FFF;
         height: 40px;
         padding: 0 20px;
         cursor: pointer;
      }
   }
`

export const PageArea = styled.div`
   
`
