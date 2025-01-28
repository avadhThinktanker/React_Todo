import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/add-todo/addTodo";
import { filterTodo } from "../../features/add-todo/filterTodo";

const TodoInput = () => {
    const dispatchTodo = useDispatch();
    const ref = useRef<HTMLInputElement>(null);
    function handleAdd() {
        if (ref.current && ref.current.value) {
            const todo = ref.current.value;
            dispatchTodo(addTodo(todo));
            ref.current.value = "";
        }
    }
    function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatchTodo(filterTodo(e.target.value));
    }
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-11 items-center sm:w-full">
                <div className="flex items-center gap-5 w-full sm:w-auto">
                    <input
                        className="bg-[#C4BABA5E] backdrop-blur-sm placeholder:text-white border-none rounded text-2xl text-white p-2 w-full sm:w-auto"
                        type="text"
                        placeholder="Add a task..."
                        ref={ref}
                    />
                    <button onClick={handleAdd} className="cursor-pointer bg-transparent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="56"
                            height="56"
                            viewBox="0 0 24 24"
                            fill="white"
                            stroke="grey"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-plus"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8" />
                            <path d="M12 8v8" />
                        </svg>
                    </button>
                </div>
                <div className="relative w-full sm:w-auto">
                    <select
                        className="bg-[#D9D9D980] backdrop-blur-sm font-bold text-white border border-white cursor-pointer p-2 w-full sm:w-auto"
                        name="filter"
                        onChange={handleFilter}
                    >
                        <option className="bg-[#201e1e4b] " value="All">
                            ALL
                        </option>
                        <option className="bg-[#201e1e4b] " value="Completed">
                            Completed
                        </option>
                        <option className="bg-[#201e1e4b] " value="Incompleted">
                            Incompleted
                        </option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default TodoInput;
