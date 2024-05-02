import React, { useState } from 'react';
import Auth from './components/Auth/Auth';
import NotFound from "./components/Pages/404Page";
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from "react-router-dom";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route path="/auth" element={<Auth/>}></Route>
                <Route index element={<Navigate replace to="/auth" />} />
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
