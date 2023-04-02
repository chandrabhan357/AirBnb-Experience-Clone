//AirBnb Clone

Now that we have covered the basic syntax and concepts of building a static page in React we are now going to learn about the next phase which is learning how to use data to crete our web pages.

//Data-driven React
what we will learn:

1. Props
2. Creating components from an array.

During making Card component as we are hard coding the data in then we think its not going to be reusable.

As our data is hard coded so it is not reusable in any meaningful way. And in React this is where the concept of Props comes into play.

//Props part 1: Understanding the Concept.

Props part2 : Reusable Components

JS inside JSX:

function App() {
const firstName = "Joe"
const lastname = "Schmoe"
return (

<h1>Hello {firstName} {lastName}! </h1>
)
}

//Props Quiz

1. What do props help us accomplish?
   Make a component more reusable.

2. How do you pass a prop into a component?
   <MyAwesomeHeader title="???" />
   MyAwesomeHeader is a component and title is used as a attribute to pass a property or prop.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the prooperties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

We receive props in a component:

function Navbar(props) {
    <!-- console.log(props) -->
    return (
        <header>
          ....
        </header>
    )
}


5. What data type is `props` when the
   component receives it?
 An object!

//Destructuring Props
Here we will learn the concept of object destructuring.
