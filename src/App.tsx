import { useState } from "react";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [loading, setLoading] = useState<boolean>(true);
  function handleTheme() {
    setLoading(true);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    };
  }

  function handleDataD() {
    setLoading(false)
  }

  return (
    <>
      <div className="relative w-full h-auto ">
        <BackgroundVideo theme={theme} handleDataD={handleDataD} />
        <div className="absolute w-full h-full flex flex-col items-center p-6 top-0 left-0 z-30">
          <div className="bg-[#D9D9D980] backdrop-blur-sm py-1 px-4 rounded-3xl">
            <h1 className="text-[#C4564D] font-bold text-3xl">To-Do List</h1>
          </div>
          <div className="absolute z-100 cursor-pointer top-6 right-10 bg-[#D9D9D980] backdrop-blur-sm p-2 rounded-full">
            <button className="cursor-pointer text-white" onClick={handleTheme}>
              Toggle Theme
            </button>
          </div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full object-cover myclass">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default App;
