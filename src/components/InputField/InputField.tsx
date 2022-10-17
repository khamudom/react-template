import React, { useRef } from "react";
import "./InputField.style.css";

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    todo,
    setTodo,
    handleAdd,
}) => {
    const inputFieldRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputFieldRef.current?.blur();
            }}
        >
            <input
                ref={inputFieldRef}
                className="input__box"
                type="input"
                placeholder="Enter a task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input__submit" type="submit">
                Go
            </button>
        </form>
    );
};

export default InputField;
