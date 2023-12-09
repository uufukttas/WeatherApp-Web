import Form from "./components/Form.tsx";
import Result from "./components/Result.tsx";

const App = () => {
  return (
    <div className="App flex items-center justify-center flex-col h-screen">
      <Form />
      <Result />
    </div>
  );
}

export default App;
