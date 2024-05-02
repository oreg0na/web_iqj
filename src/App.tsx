import React, { useState } from 'react';
import Login from './components/Auth/Auth';
import NotFound from "./components/Pages/404Page";
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from "react-router-dom";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route path="/login" element={<Login/>}></Route>
                <Route index element={<Navigate replace to="/login" />} />
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        )
    );
    return (
        <div className="app">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
