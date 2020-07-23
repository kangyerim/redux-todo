import React from "react";
import { useSelector } from 'react-redux'
import  useActions  from './store/user.action'
import { changeInput, insert, toggle, remove } from './store/todos.reducer'
import Todos from'./Todos'
const TodosApp = () => {
    const { input, todos } = useSelector(( { todosReducer } ) => ( { input : todosReducer. input, todos : todosReducer.todos } ) )
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    )
    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert}
               onToggle={onToggle} onRemove={onRemove}/>
    )
}
export default React.memo(TodosApp)