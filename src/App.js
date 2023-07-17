import "./styles.css";
import { useFetchData } from "./hooks/useFetchData";
import { Slide } from "./component/Slide";
import UseRefComponent from "./component/UseRefComponent";
import ChildA from "./contextApi/ChildA";
import { createContext } from "react";
import UseMemoHooks from "./allHooks/UseMemoHooks";
import UseCallbackHooks from "./allHooks/useCallbackHookFs/UseCallbackHooks";
import TodoList from "./Todolist/TodoList";
import UseReducerHooks from "./allHooks/UseReducerHooks";

const url = "https://dummyjson.com/products";

const createDataContext = createContext();

const createApiProvider2 = createContext();
export default function App() {
  const { data, isLoading } = useFetchData(url);

  console.log({ data, isLoading });

  /**
   * for context api
   * create, provider,consume/useContext
   */
  let name = "Subhransu";

  let age = 27;
  /**
   * for condition rendering
   */
  if (isLoading) {
    return <h1>Loading Slide</h1>;
  }
  return (
    <div className="App">
      {/* 
      <h1>Slide App</h1>
      {data && data.length > 0 ? <Slide slides={data} /> : null}
      <UseRefComponent />
      <createDataContext.Provider value={name}>
        <createApiProvider2.Provider value={age}>
          <ChildA />
        </createApiProvider2.Provider>
      </createDataContext.Provider>
  */}
      {/*
      <UseMemoHooks />
       <UseCallbackHooks />
        <TodoList />
       */}

      <UseReducerHooks />
    </div>
  );
}

export { createDataContext, createApiProvider2 };
