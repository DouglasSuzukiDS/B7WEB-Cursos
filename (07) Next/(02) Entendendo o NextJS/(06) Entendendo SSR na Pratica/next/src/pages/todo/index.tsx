import { Todo } from "@/types/Todo"

type Props = {
   todo: Todo[]
}

const Todo = ({ todo }: Props) => {
   return(
      <div>
         <h1>Lista de Tarefas</h1>

         <ul>
            { todo.map((todoItem, index) => (
               <li key={ index }>{ todoItem.title } - { todoItem.completed ? 'true' : 'false' }</li>
            )) }
         </ul>
      </div>
   )
}

export default Todo

export const getServerSideProps = async() => { // Quando se acessa a página
   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
   const todoList = await res.json()

   return {
      props: {
         todo: todoList
      }
   }
} 