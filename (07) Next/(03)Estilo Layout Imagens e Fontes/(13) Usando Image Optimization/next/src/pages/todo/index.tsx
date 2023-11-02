import { Todo } from "@/types/Todo"
import { useEffect, useState } from "react"

type Props = {
   todo: Todo[]
}

const Todo = () => {
   const [todoList, setTodoList] = useState<Todo[]>([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      loadTodos()
   }, [])

   const loadTodos = async() => {
      setLoading(true)

      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const list = await res.json()

      setTodoList(list)
      setLoading(false)
   }

   return(
      <div>
         <h1>Lista de Tarefas</h1>

         { loading && <div>Carregando ...</div> }

         <ul>
            { todoList.map((todoItem, index) => (
               <li key={ index }>{ todoItem.title } - { todoItem.completed ? 'true' : 'false' }</li>
            )) }
         </ul>
      </div>
   )
}

export default Todo

/*export const getServerSideProps = async() => { // Quando se acessa a página
   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
   const todoList = await res.json()

   return {
      props: {
         todo: todoList
      }
   }
} */