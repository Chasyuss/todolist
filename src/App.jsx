import React, { useState } from 'react';
import './App.css';

const App = () => {
  //초기상태설정
  const initialState = [
    { id: 0, title: '리액트 개인과제', content: '시작하기', isDone: false }
  ];
  const [todos, setTodos] = useState(initialState);

  //제목, 내용 설정
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //내용 상태 변경
  const handleInputChange = (e) => {
    setContent(e.target.value);
  }

  //내용제목변경
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  // todo 추가
  const AddTodo = (e) => {
    e.preventDefault();
    if (!title || !content) { // 제목 내용 비어있는지 확인 후 alert
      alert("제목과 내용을 입력해주세요");
      return;
    }

    //새로운 todo 항목 생성
    const newTodo = {
      id: todos.length,
      title: title,
      content: content,
      isDone: false
    };

    setTodos([...todos, newTodo]); // 새로운 todo 추가

    setTitle(""); // 초기화 
    setContent(""); // 초기화
  };

  //toggle 
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };

  //삭제
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <form className='todolist' onSubmit={AddTodo}>
      <h2> Todo List</h2>
      <div className='todolist-container'>
        <div className='items'>
          <div>
            <label className='title'> 제목 </label>
            <input className='add1' type='text' placeholder='제목' value={title} onChange={handleTitleChange} />
          </div>

          <div>
            <label className='context'> 내용 </label>
            <input className='context1' type='text' placeholder='내용' value={content} onChange={handleInputChange} />
          </div>
        </div>

        <button className='addTodo' type="submit"> 추가하기 </button>
      </div>

    </form>
  );
}

export default App;
