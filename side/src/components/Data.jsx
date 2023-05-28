import React from 'react';


import {
    FaBehance,
    FaFacebook,
    FaTwitter,
    FaSketch, 
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaWpforms,
} from 'react-icons/fa';

import { BiCalendar } from 'react-icons/bi'
import { BsLinkedin } from 'react-icons/bs'


export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <FaHome />,
    },


    {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends />,
    },


    {
        id: 3,
        url: '/projects',
        text: 'projects',
        icon: <FaFolderOpen />,
    },


    {
        id: 4,
        url: '/calender',
        text: 'calender',
        icon: <BiCalendar />,
    },


    {
        id: 5,
        url: '/documents',
        text: 'documents',
        icon: <FaWpforms />,
    },
];


export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com/',
        icon: <FaFacebook />,
    },

    {
        id: 2,
        url: 'https://twitter.com/',
        icon: <FaTwitter />,
    },


    {
        id: 3,
        url: 'https://www.linkedin.com/',
        icon: <BsLinkedin />,
    },


    {
        id: 4,
        url: 'https://www.behance.net/',
        icon: <FaBehance />,
    },


    {
        id: 5,
        url: 'https://www.sketch.com/',
        icon: <FaSketch />,
    },
];