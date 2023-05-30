import React from 'react';
import ReactToPdf from 'react-to-pdf';
import Footer from "../Footer/Footer";

const Blog = () => {
    const ref = React.createRef();
    return (
        <>
        <div className='mt-10 container mx-auto'>


            <div className='p-10'>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button className='btn  bg-orange-500' onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div style={{ width: 1000, height: 800, background: 'dark' }} ref={ref} >
                    <div className="">
                        <p className='text-3xl font-bold mb-3'>What is the differences between uncontrolled and controlled components ?</p>
                        <p className='text-lg font-bold mb-10'> Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                        <div>
                            <p className='text-3xl font-bold mb-3'>How to validate React props using PropTypes ?</p>
                            <p className='text-lg font-bold mb-10'>
                                <li>PropTypes.any : The prop can be of any data type.</li>
                                <li> PropTypes.bool : The prop should be a Boolean.</li>
                                <li>PropTypes.number : The prop should be a number.</li>
                                <li>PropTypes.string : The prop should be a string.</li>
                                <li>PropTypes.func : The prop should be a function.</li>
                                <li> PropTypes.array : The prop should be an array.</li>
                            </p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold mb-3'>What is the difference between nodejs and express js.</p>
                            <p className='text-lg font-bold mb-10'>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold mb-3'>What is a custom hook, and why will you create a custom hook?</p>
                            <p className='text-lg font-bold mb-10'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Blog;
