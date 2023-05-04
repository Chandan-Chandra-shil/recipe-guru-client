import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="mt-4 mb-5">
      <h2 className="text-center fw-bold text-warning  ">Blog Page</h2>
      <Container>
        <h4 className="fw-semibold m-0 p-0">
          1. Tell us the differences between uncontrolled and controlled
          components?
        </h4>
        <p>
          <span className="text-warning"> Answer : </span>

          <p>
            Uncontrolled components are components where the state is managed by
            the DOM itself, rather than being explicitly managed by the
            component's code. This means that the component's value is initially
            set by the HTML attribute, but after that, the user is able to
            update the value freely without any restrictions from the component
            itself. In this case, the component does not have any state
            variables, and instead, the component obtains its value from the DOM
            using a ref.
          </p>
          <p>
            On the other hand, controlled components are components where the
            state is managed by the component's code itself. This means that the
            value of the component is initially set by the component's state,
            and any updates to the value must go through the component's
            onChange event handler. In this case, the component has its own
            state variables, and its value is updated by updating the state,
            which then triggers a re-render of the component.
          </p>
          <p className="m-0 p-0">
            Overall, the key difference between controlled and uncontrolled
            components is in how the component state is managed. Controlled
            components manage the component state through their own state
            variables, while uncontrolled components let the DOM handle the
            state. Choosing which approach to use depends on the specific use
            case and the desired behavior of the component.
          </p>
        </p>
        
        <h4 className="fw-semibold  m-0 p-0">
          2. How to validate React props using PropTypes ?
        </h4>
        <p>
          <span className="text-warning"> Answer : </span>
          <br />
          <p>
            PropTypes is a library that is built into React and is used to
            validate the types of props that are passed to React components.
            PropTypes allows you to define the expected data type and any other
            requirements for the props, such as whether the prop is required or
            has a default value. By validating the props using PropTypes, you
            can catch and debug errors early in the development process and
            ensure that your components receive the correct data types and
            values. PropTypes is a simple and powerful way to add a layer of
            validation to your React components.
          </p>
        </p>
        <h4 className="fw-semibold  m-0 p-0">
          3. Tell us the difference between nodejs and express js ?
        </h4>
        <p>
          <span className="text-warning"> Answer : </span> <br />
          <p>
            Node.js is a JavaScript runtime that allows developers to run
            JavaScript code on the server-side. It provides a rich set of
            features and APIs for building scalable, high-performance network
            applications. With Node.js, developers can build server-side
            applications using JavaScript, which can reduce the learning curve
            for front-end developers who are already familiar with the language.
          </p>
          <p>
            Express.js, on the other hand, is a web framework built on top of
            Node.js. It provides a set of tools and utilities for building web
            applications and APIs in Node.js. Express.js provides a way to
            organize your application into routes, middleware, and controllers,
            which makes it easier to write maintainable and scalable code.
          </p>
        </p>
        <h4 className="fw-semibold  m-0 p-0">
          4. What is a custom hook, and why will you create a custom hook? ?
        </h4>
        <p>
          <span className="text-warning"> Answer : </span> <br />
          Developers can create a custom hook to encapsulate any complex or
          repetitive functionality that might be needed across multiple
          components. For example, a custom hook could be used to handle form
          validation, handle data fetching from an API, or manage a complex
          state logic that would be used across multiple components.
        </p>
        <p>
          Creating a custom hook offers several benefits over duplicating code
          across multiple components. Custom hooks can help to improve code
          organization, readability, and reusability. They can also help to
          reduce the amount of boilerplate code that is needed in each component
          and make it easier to maintain and refactor code in the future.
        </p>
      </Container>
    </div>
  );
};

export default Blog;
