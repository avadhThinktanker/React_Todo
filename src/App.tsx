import BackgroundVideo from "./components/BackgroundVideo";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

function App() {
  return (
    <>
      <div className="relative w-full h-auto">
        <BackgroundVideo />
        <div className="absolute w-full h-full flex flex-col items-center p-6 top-0 left-0 z-30">
          <div className="bg-[#D9D9D980] backdrop-blur-sm py-1 px-4 rounded-3xl">
            <h1 className="text-[#C4564D] font-bold text-3xl">To-Do List</h1>
          </div>
          <div className="p-4">
            <TodoInput />
          </div>
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
