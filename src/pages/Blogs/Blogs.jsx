import React from 'react';
import { Accordion } from 'flowbite-react';
import Pdf from "react-to-pdf";
import Blog from './Blog';

const ref = React.createRef();

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <div className="divider my-12 text-5xl font-extrabold">All Blogs</div>

            <div className='link link-hover text-2xl font-extrabold text-primary my-4'>
                <Pdf targetRef={ref} filename="blog.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
                </Pdf>
            </div>

            <div ref={ref}>
                <Accordion alwaysOpen={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Differences between uncontrolled and controlled components?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Uncontrolled components have their state managed by the DOM, whereas controlled components are React components that have React manage their state. Uncontrolled components are easier to use and more quickly to construct, but controlled components give form data more control and predictability. Uncontrolled components use refs to access the form data, whereas controlled components use event handlers to change state and re-render the component.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            How to validate React props using PropTypes?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                React's PropTypes functionality gives users a mechanism to check the data types of props before passing them to a component. We can make sure that the props provided to a component are of the expected data type and shape by using PropTypes. We may import the PropTypes package from the 'prop-types' library and describe the anticipated data types and shapes for each prop using the PropTypes module to validate props using PropTypes. By setting the propTypes property of the component to an object that specifies the anticipated data types and shapes of the props, we can then use the PropTypes module to validate the props in the component. A variety of data type validators, including string, number, boolean, array and object, are offered by PropTypes.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            The difference between nodejs and express js?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-500">
                                <strong>Node.js </strong>is a runtime environment for server-side, external execution of JavaScript programs. Using JavaScript, it enables developers to create scalable and fast applications. Because of its event-driven, non-blocking I/O approach, Node.js is quick and easy to use.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-500">
                                <strong>Express.js </strong>is a web framework built On top of Node.js that offers extra tools for creating online apps. It offers a more straightforward and user-friendly way to manage HTTP requests and answers, routing, middleware, and other things. Express.js's versatile and user-friendly design makes it possible for developers to create web applications rapidly and with ease.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is a custom hook, and why will you create a custom hook?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                A JavaScript method called a "custom hook" in the React framework lets you reuse stateful behavior across many components. With the help of custom hooks, you may turn complicated logic into a modular and reusable piece of code. They can be used to encapsulate functionality, maintain state, and carry out side effects.
                                To avoid writing duplicate code for several components or to simplify complicated logic, you might develop a custom hook. For instance, you may design a unique hook that controls a form's state, carries out validation, and manages submission. Then, by reusing this hook across various components that have forms, you can cut down on duplication and make your code more modular and simple to maintain.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>

            <div className='link link-hover text-2xl font-extrabold text-primary my-4'>
                <Pdf targetRef={ref} filename="blog.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
                </Pdf>
            </div>
        </div>
    );
};

export default Blogs;