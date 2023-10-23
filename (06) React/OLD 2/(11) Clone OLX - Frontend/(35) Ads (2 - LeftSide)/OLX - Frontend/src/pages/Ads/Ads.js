import { PageArea } from './styled'
import { PageContainer } from '../../components/MainComponents'
import { useState } from 'react'
import useApi from '../../helpers/OlxAPI'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AdItem } from '../../components/partials/AdItem'

export const Ads = () => {
   const api = useApi()

   // alert(useLocation().search) // Retorna a query do endpoint

   const useQueryString = () => {
      return new URLSearchParams( useLocation().search )
   }

   const query = useQueryString()

   // alert( query.get('cat') ) // Retorna o valor do parametro cat

   const [q, setQ] = useState( query.get('q') !== null ? query.get('q') : '' )
   const [cat, setCat] = useState( query.get('cat') !== null ? query.get('cat') : '' )
   const [state, setState] = useState( query.get('state') !== null ? query.get('state') : '' )

   const [stateList, setStateList] = useState([])
   const [categories, setCategories] = useState([])
   const [adList, setAdList] = useState([])

   useEffect(() => {
      const getStates = async() => {
         const sList = await api.getStates()
         setStateList(sList)
      }
      getStates()
   }, [])

   useEffect(() => {
      const getCategories = async() => {
         const cats = await api.getCategories()
         setCategories(cats)
      }
      getCategories()
   }, [])

   useEffect(() => {
      const getRecentAds = async() => {
         const json = await api.getAds({
            sort: 'desc',
            limit: 8
         })
         setAdList(json.ads)
         //console.log(json.ads)
      }
      getRecentAds()
   }, [])

   return(
      <>
         <PageContainer>
            <PageArea>
               <div className='leftSide'>
                  <form method='GET'>
                     <input 
                        type='text' 
                        name='q' 
                        placeholder='O que você procura?' 
                        value = { q }   
                     />

                     <div className='filterName'>Estado</div>

                     <select className='state' value={ state }>
                        <option></option>
                        { stateList.map((i, k) =>
                           <option key={ k}  value={ i.name }>{ i.name }</option>
                        ) }
                     </select>

                     <div className='filterName'>Categoria</div>

                     <ul>
                        { categories.map((i, k) =>
                           <li key={ k } className={ cat === i.slug ? 'categoryItem active' : 'categoryItem' }>
                              <img src={ i.img } alt={ i.name } />
                              <span>{ i.name }</span>
                           </li>
                        ) }
                     </ul>
                  </form>
               </div>

               <div className='rightSide'>
                  ***
               </div>
            </PageArea>
         </PageContainer>
      </>
   )
}