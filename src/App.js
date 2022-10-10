import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Componants/Header/Header';
import Blog from './Componants/Blog/Blog';

function App() {

const router = createBrowserRouter([
{path: '/', element: <Header></Header>},
{path: '/blog', element: <Blog></Blog>}
])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
