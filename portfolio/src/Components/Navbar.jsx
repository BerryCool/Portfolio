import React from 'react';
import { Link, useRoute } from "wouter";


const Navbar = () =>{
    const isActive = useRoute();

    return(
        <div 
        className='justify-end pr-16 py-8 flex fixed w-full gap-10'
        >
            <Link href="/">Home</Link>
            <Link href ="/about">About</Link>
            <Link href ="/projects">Projects</Link>
            <Link href ="/contact">Contact</Link>
        </div>
    )
}

export default Navbar;