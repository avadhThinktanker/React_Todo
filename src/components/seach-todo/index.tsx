import React from "react";
import { useDispatch } from "react-redux";
import { searchTodos } from "../../features/add-todo/addTodo";

interface SearchTodoProps {
    search: string;
    setSearch: (search: string) => void;
}

const SearchTodo = ({ search, setSearch }: SearchTodoProps) => {
    const dispatch = useDispatch();
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
        dispatch(searchTodos(e.target.value));
    }
    return (
        <div className="search-input">
            <div className="input relative flex items-center">
                <input
                    className="bg-[#C4BABA5E] backdrop-blur-sm placeholder:text-white border-none rounded-full text-2xl text-white py-2 px-4 w-full sm:w-auto "
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearch}
                />
                <div className="search-icon absolute right-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="32"
                        height="32"
                        fill="white"
                        viewBox="0 0 50 50"
                    >
                        <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SearchTodo);
