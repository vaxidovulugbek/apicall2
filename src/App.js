import './App.css';
import GetRequest from './components/GetRequest';
import PostRequest from './components/PostRequest';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div className="App">
      test
      <GetRequest />
      <PostRequest />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
