import React, { useEffect, useState, useRef } from "react";
import { ITodo } from "../../model";
import "./SingleTodo.style.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
    todo: ITodo;
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    index: number;
}

const SingleTodo: React.FC<SingleTodoProps> = ({
    todo,
    todos,
    setTodos,
    index,
}) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    useEffect(() => {
        todoInputRef.current?.focus();
    }, [edit]);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false);
    };

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todos__single ${
                        snapshot.isDragging ? "drag" : ""
                    }`}
                    onSubmit={(e) => handleEdit(e, todo.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {edit ? (
                        <input
                            ref={todoInputRef}
                            className="todos__single-text"
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                        />
                    ) : todo.isComplete ? (
                        <s className="todos__single-text">{todo.todo}</s>
                    ) : (
                        <span className="todos__single-text">{todo.todo}</span>
                    )}

                    <div>
                        <span
                            className="icon"
                            onClick={() => {
                                if (!edit && !todo.isComplete) {
                                    setEdit(!edit);
                                }
                            }}
                            aria-hidden="true"
                        >
                            <AiFillEdit />
                        </span>
                        <span
                            className="icon"
                            onClick={() => handleDelete(todo.id)}
                            aria-hidden="true"
                        >
                            <AiFillDelete />
                        </span>
                        <span
                            className="icon"
                            onClick={() => handleDone(todo.id)}
                            aria-hidden="true"
                        >
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default SingleTodo;
