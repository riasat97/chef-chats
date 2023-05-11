import {  Navigate, createBrowserRouter } from "react-router-dom";
//import Main from "../layouts/Main";
//import Category from "../pages/Home/Category/Category";
//import News from "../pages/News/News/News";
//import NewsLayout from "../layouts/NewsLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Main from "../layouts/Main";
import Chefs from "../pages/Home/Chefs";
import Recipes from "../pages/Home/Recipes";
import NotFound from "../Shared/NotFound";
import ErrorElement from "../../../b7a9-career-hub-riasat97/src/Components/Layout/ErrorElement/ErrorElement";
import PrivateRoute from "./PrivateRoutes";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorElement></ErrorElement>, 
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate> 
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'home',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '',
                element: <Chefs></Chefs>,
                loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-riasat97.vercel.app/chefs')
            },
            {
                path: 'chefs/:id/recipes',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute> ,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-riasat97.vercel.app/chefs/${params.id}/recipes`)
            }
        ]
    },
    {
        path:'blogs',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children:[
            {
                path:'',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
      }
    // {
    //     path: 'news', 
    //     element: <NewsLayout></NewsLayout>,
    //     children: [
    //         {
    //             path: ':id',
    //             element: <PrivateRoute><News></News></PrivateRoute>,
    //             loader: ({params}) => fetch(`https://the-news-dragon-server-jhankarphero.vercel.app/news/${params.id}`)
    //         }
    //     ]
    // }
])

export default router;