import React from 'react';
import '../Home/Home.css'

const Home = () => {
    return (
        <div>
            <header>
            <nav className='nav-container'>
            <h2 className='nav-title' >Ma<span className='text-primary'>r</span>y</h2>
            <ul className='nav-items'>
            <li>Portfolio</li>
            <li>Blog</li>
            <li><button className='nav-button'>Hire</button></li>
            </ul>
            </nav>
            </header>
            <main>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default Home;