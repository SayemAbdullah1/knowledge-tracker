import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs'>
            <h1>Blogs</h1>
           <div >
                <div className='blog'>
                    <h3>What is the purposes of react router?</h3>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='blog'>
                    <h3>How does context API works?</h3>
                    <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
                </div>
                <div className='blog'>
                    <h3>What is use href?</h3>
                    <p>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
                </div>
           </div>
        </div>
    );
};

export default Blog;