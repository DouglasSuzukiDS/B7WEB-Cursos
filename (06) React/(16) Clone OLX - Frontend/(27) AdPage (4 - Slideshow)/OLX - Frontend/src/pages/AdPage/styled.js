import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

export const Fake = styled.div`
   background-color: #DDD;
   height: ${ props => props.height || 20 }px;
`

export const PageArea = styled.div`
   display: flex;
   margin-top: 20px;

   .box {
      background-color: #C1C7E0;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      margin-bottom: 20px;
   }

   .box--padding {
      padding: 10px
   }

   .leftSide {
      flex: 1;
      margin-right: 20px;

      .box {
         display: flex;
      }

      .adImage {
         width: 320px;
         height: 320px;
         margin-right: 20px;
         /* border: 1px solid red; */

         .each-slide img {
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            height: 320px;
         /* border: 1px solid red; */

         }
      }

      .adInfo {
         /* padding:  10px; */
         flex: 1;

         .adName {
            margin-bottom: 20px;

            h2 {
               margin: 0;
               margin-top: 20px;
            }

            small {
               color: #999;
            }
         }

         .adDescription {

            hr {
               margin: 10px 0px;
            }

            small {
               color: #999;
            }
         }
      }
   }

   .rightSide {
      width: 250px;
   }

`