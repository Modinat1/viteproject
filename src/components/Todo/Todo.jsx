import React from 'react'
import TodoCard1 from './TodoCard1'
import TodoCard2 from './TodoCard2'
import TodoCard3 from './TodoCard3'

const Todo = () => {
  return (
    <section className="todo">
        <TodoCard1/>
        <TodoCard2/>
        <TodoCard3/>
    </section>
  )
}

export default Todo