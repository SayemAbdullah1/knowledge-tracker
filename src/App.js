import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Componants/Header/Header';
import Blog from './Componants/Blog/Blog';
import Topics from './Componants/Topics/Topics';
import Statistics from './Componants/Statistics/Statistics';
import Main from './Componants/layout/Main';
import ErrorPage from './Componants/ErrorPage/ErrorPage';
import Quiz from './Componants/Quiz/Quiz';


function App() {

const router = createBrowserRouter([
{path: '/', 
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>, children: [

  {path: '/', 
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    element: <Topics></Topics>},
    {path: '/:topicsId',
      loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`),
    element: <Quiz></Quiz>

    },

  { path: '/statistics', element: <Statistics></Statistics>},
  
  {path: '/blog', element: <Blog></Blog>},
]
},
])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
