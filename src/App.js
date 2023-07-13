import "./styles.css";
import { useFetchData } from "./hooks/useFetchData";
import { Slide } from "./component/Slide";

const url = "https://dummyjson.com/products";
export default function App() {
  const { data, isLoading } = useFetchData(url);

  console.log({ data, isLoading });

  if (isLoading) {
    return <h1>Loading Slide</h1>;
  }
  return (
    <div className="App">
      <h1>Slide App</h1>
      {data && data.length > 0 ? <Slide slides={data} /> : null}
    </div>
  );
}
