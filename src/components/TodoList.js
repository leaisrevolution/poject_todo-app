import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
    return (
        <div className="Todolist">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;