import  React from 'react'
import { FaBars, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
    },


    {
        id: 2,
        url: '/About',
        text: 'About',
    },


    {
        id: 3,
        url: '/Projects',
        text: 'Projects',
    },


    {
        id: 4,
        url: '/Profile',
        text: 'Profile',
    },


    {
        id: 5,
        url: '/Contact',
        text: 'Contact',
    },
];



export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />,
    },


    {
        id: 2,
        url: 'https://twitter.com',
        icon: <FaTwitter />,
    },


    {
        id: 3,
        url: 'https://www.instagram.com',
        icon: <FaInstagram />
    },


    {
        ID: 4,
        URL: 'https://www.linkedin.com',
        icon: <FaLinkedin />
    }
];