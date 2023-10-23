import styled from "styled-components";

export const Container = styled.div`
   width: 740px;
   padding: 10px;
`

export const ProductArea = styled.div`
   height: 200px;
   display: flex;
`

export const ProductPhoto = styled.img`
   width: 310px;
   border-radius: 10px;
`

export const ProductName = styled.div`
   font-size: 30px;
   font-weight: bold;
`

export const ProductIngredients = styled.div`
   font-size: 14px;
`

export const ProductInfoArea = styled.div`
   flex: 1;
   /* background-color: #00F; */
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-left: 10px;
`

export const ProductDetails = styled.div`
  
`

export const ProductQuantityArea = styled.div`
   height: 50px;
   background-color: #00F;
`

export const ProductButtons = styled.div`
   margin-top: 10px;
   display: flex;
   justify-content: flex-end;
`

export const ProductButton = styled.button`
   border: 0;
   background-color: #073C07;
   box-shadow: 4px 5px 0px rgba(0, 0, 0, .16);
   color: #FFF;
   font-size: 22px;
   font-weight: bold;
   padding: 10px 20px;
   margin-left: 10px;
   border-radius: 5px;
`