import React from "react";
import { ITodo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";
import "./TodoList.style.css";
import { Droppable } from "react-beautiful-dnd";

interface TodoListProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    completedTodos: ITodo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
}) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div
                        className={`todos ${
                            snapshot.isDraggingOver ? "drag-active" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span>Active Task</span>
                        {todos?.map((item, index) => (
                            <SingleTodo
                                index={index}
                                todo={item}
                                key={item.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="CompletedList">
                {(provided, snapshot) => (
                    <div
                        className={`todos remove ${
                            snapshot.isDraggingOver ? "drag-complete" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span>Completed Task</span>
                        {completedTodos?.map((item, index) => (
                            <SingleTodo
                                index={index}
                                todo={item}
                                key={item.id}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;
