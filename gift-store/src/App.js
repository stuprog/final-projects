import React from 'react' 
import './App.css'
import Dash from './Pages/ProductList'
import AddProduct from './Pages/AddProduct'
import AddCategory from './Pages/AddCategory'
import ViewCategories from './Pages/CategoriesList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import history from './SharedComponents/history'
import { SnackbarProvider } from 'notistack';


export default function App()
{
    return(
        <SnackbarProvider maxSnack={1}> 
        <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css" />
        <Router history ={history}>
            <div>
                <Routes>
                    <Route exact path="/"  element={<Dash/>}></Route>
                    <Route exact path="/addProduct"  element={<AddProduct/>}></Route>
                    <Route exact path="/addCategory"  element={<AddCategory/>}></Route>
                    <Route exact path="/viewCategories"  element={<ViewCategories/>}></Route>
                </Routes>
            </div>

        </Router>
       
 </SnackbarProvider>

    )
}