import { PageArea } from './styled'
import { PageContainer } from '../../components/MainComponents'
import { useState } from 'react'
import useApi from '../../helpers/OlxAPI'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AdItem } from '../../components/partials/AdItem'

let timer

export const Ads = () => {
   const api = useApi()
   const navigate = useNavigate()

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

   const [resultOpacity, setResultOpacity] = useState(1)

   const getAdsList = async() => {
      const json = await api.getAds({
         sort: 'desc',
         limit: 9,
         q,
         cat, 
         state
      })
      setAdList(json.ads)
      setResultOpacity(1)
   }

   useEffect(() => {
      let queryString = []
      if(q) {
         queryString.push(`q=${ q }`)
      }

      if(cat) {
         queryString.push(`cat=${ cat }`)
      }

      if(state) {
         queryString.push(`state=${ state }`)
      }
      
      navigate(`?${ queryString.join('&') }`) // Altera a url dinamicamente

      if(timer) {
         clearTimeout(timer)
      }

      timer = setTimeout(getAdsList, 2000) // So faz a busca depois de 2 segundos evitando fazer requisiões conforme for 
      
      setResultOpacity(.3)

   }, [q, cat, state])

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
                        onChange={ e => setQ(e.target.value) }
                     />

                     <div className='filterName'>Estado</div>

                     <select 
                        className='state' 
                        value={ state }
                        onChange={ e => setState(e.target.value) }
                     >
                        <option></option>
                        { stateList.map((i, k) =>
                           <option key={ k}  value={ i.name }>{ i.name }</option>
                        ) }
                     </select>

                     <div className='filterName'>Categoria</div>

                     <ul>
                        { categories.map((i, k) =>
                           <li key={ k } 
                              className={ cat === i.slug ? 'categoryItem active' : 'categoryItem' }
                              onClick={ () => setCat(i.slug) }
                           >
                              <img src={ i.img } alt={ i.name } />
                              <span>{ i.name }</span>
                           </li>
                        ) }
                     </ul>
                  </form>
               </div>

               <div className='rightSide'>
                  <h2>Resultados</h2>

                  <div className='list' style={{ opacity: `${ resultOpacity }` }}>
                     { adList.map((i, k) => (
                           <AdItem k={ k } data={ i } />
                        ))
                     }
                  </div>
               </div>
            </PageArea>
         </PageContainer>
      </>
   )
}