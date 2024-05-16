const List = ({ todos, toggleTodo, removeTodo, isDone }) => {
    return (
        <div className='workingcardWraper'>
            {todos.map(todo => (
                <div key={todo.id} className='todoCard'>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <button className='completebtn' onClick={() => toggleTodo(todo.id)}>
                        {todo.isDone ? '취소' : '완료'}
                    </button>
                    <button className='removebtn' onClick={() => removeTodo(todo.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
}

export default List