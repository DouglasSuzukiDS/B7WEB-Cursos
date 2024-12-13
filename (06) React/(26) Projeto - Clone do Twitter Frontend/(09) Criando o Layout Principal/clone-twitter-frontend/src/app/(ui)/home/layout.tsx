import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export default function Layout({ children }: Props) {
   return(
      <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
         <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
            Left
         </section>

         <section className="flex-1 max-w-lg">
            { children }
         </section>

         <aside className="hidden lg:flex flex-col sticky top-0 h-fit  w-96 px-8 py-6 border-l-2 border-gray-900 gap-6">
            Right
         </aside>
      </main>
   )
} 