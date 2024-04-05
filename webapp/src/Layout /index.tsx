import React from 'react'
import { Provider } from 'react-redux';
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";
import { buildStore } from '../core/store';
export const Layout = () => {


    return (<div>
        <h1>Software dietas</h1>
        <Link to={'/search'}>Search</Link>
        <Provider store={buildStore()}>
            <Outlet />
        </Provider>
    </div>)
}