const { default: styled } = require("styled-components");

export const Container = styled.div`
   display: ${ props => props.status ? 'flex' : 'none' };
   justify-content: center;
   align-items: center;
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, .7);
   z-index: 900;
`

export const ModalBody = styled.div`
   width: 300px;
   height: 300px;
   background-color: #FFF;
`