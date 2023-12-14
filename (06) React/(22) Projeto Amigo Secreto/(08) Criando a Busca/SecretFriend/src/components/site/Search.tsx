'use client'

import { SearchResult } from "@/types/SearchResult"
import { useState } from "react"
import { SearchForm } from "./SearchForm"
import { SearchReveal } from "./SearchReveal"

type Props = {
   id: number
}

export const Search = ({ id }: Props) => {
   const [results, setResults] = useState<SearchResult>()

   const handleSearchButton = async(cpf: string) => {

   }

   return(
      <section className="bg-gray-900 p-5 rounded">
         { !results && <SearchForm onSearchButton={ handleSearchButton } /> }

         { results && <SearchReveal results={ results } /> }
      </section>
   )
}

export default Search