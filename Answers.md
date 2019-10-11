# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

<!-- React is a user interface component library that takes in data and renders it on the DOM using simple concepts to create big, fast web apps. The JS is comprised of components and each component has 1 simple, job. They act as individual bricks to build large, complex structures where data can easily find its way to where it belongs. -->

2. What does it mean to think in react?

<!-- It means viewing a component as a pure function which transforms data into a user interface, and they should be as generic as possible reusability. They should also only render when their input has changed. -->

3. Describe state.

<!-- State means the current status of the data. So the component is projecting what is currently in the data onto the DOM. -->

4. Describe props.

<!-- Data from the object / array that trickles down from parent component to child component, only displayed through the child. -->

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

<!-- They are anything that affects something outside the scope a function. For example, if it modifies a global variable or makes a network call. We do this through hooks which allow us to easily manipulate the state of our functional component without needing to convert them into class components. -->