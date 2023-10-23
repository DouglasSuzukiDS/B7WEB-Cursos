import { PageArea } from './styled'
import { PageContainer } from '../../components/MainComponents'
import useApi from '../../helpers/OlxAPI'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const AdPage = () => {
   const api = useApi()
   const { id } = useParams()

   const [loading, setLoading] = useState(true)
   const [adInfo, setAdInfo] = useState([])

   return(
      <PageContainer>
         <PageArea>
            <div className='leftSide'>
               <div className='box'>
                  <div className='adImage'>
                     image
                  </div>
                  
                  <div className='adInfo'>
                     <div className='adName'>
                        name
                     </div>

                     <div className='adDescription'>
                        desc
                     </div>
                  </div>
               </div>
            </div>

            <div className='rightSide'>
               <div className='box'>***</div>
               
               <div className='box'>***</div>
            </div>
         </PageArea>
      </PageContainer>
   )
}