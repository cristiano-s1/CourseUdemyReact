import React from "react";
import { Link } from 'react-router-dom';
//import {userNavigate, Link } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import "./styles.css";
import logo from '../../assets/logo.svg'

export default function Books(){
    return (
        <div className="book-container" >
            <header>
                <img src={logo} alt="App" />
                <span>Welcome, <strong>Cristiano</strong>!</span>
                <Link className="button" to="/book/new">Add new book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Registered Books</h1>

            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>

                    <strong>Author:</strong>
                    <p>Nigel Poul</p>

                    <strong>Price:</strong>
                    <p>40,00</p>

                    <strong>Release Date:</strong>
                    <p>12/07/2018</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>
            </ul>
        </div>
    );
}