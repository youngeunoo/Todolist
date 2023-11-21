import TodoItem from "./TodoItem";

const TodoList = ({ data, onDel, onMod }) => {
  return (
    <div>
      <ul>
        {data.map((list) => (
          <TodoItem key={list.id} list={list} onDel={onDel} onMod={onMod} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;