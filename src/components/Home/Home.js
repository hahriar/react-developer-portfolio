import React from 'react';
import '../Home/Home.css'

const Home = () => {
    return (
        <div >
            <header className='header'>
            <nav className='nav-container'>
            <h2 className='nav-title' >Ari<span className='text-primary'>y</span>al</h2>
            <ul className='nav-items'>
            <li>Portfolio</li>
            <li>Blog</li>
            <li><button className='nav-button'>Hire</button></li>
            </ul>
            </nav>
            
            <div className="banner">
            <div>
            <h3 className='banner-sub-title'>Hi, I am</h3>
            <h1 className='banner-title'>Ariyal</h1>
            <p className='banner-discription'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
            <button className='nav-button'>Download CV</button>
            <button className='second-button'>Contract Me</button>
            </div>
            <img className='image-position' src={require('./hardy.png')} alt="hardy" />
            </div>
            

            </header>
            <main>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default Home;