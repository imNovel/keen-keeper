import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='text-center flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-7xl font-extrabold'>404 - Not Found</h1>
            <p className='text-lg font-semibold'>The page you are looking for does not exist.</p>
            <Link to="/" className='btn bg-green-900 text-white'>Go Back Home</Link>
        </div>
    );
};

export default NotFoundPage;