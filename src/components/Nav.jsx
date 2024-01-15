import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <header className="bg-dark pt-2 pb-2">
        <div className="container">
            <div className="row justify-content-between">
                <div className="logo col-auto text-warning">Midterm Practice</div>
                <nav className="col-auto">
                    <a className="text-warning">Page 1</a>
                    <a className="text-warning">Page 2</a>
                    <a className="text-warning">Page 3</a>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default Nav
