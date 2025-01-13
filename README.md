# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![Light Theme](/LightTheme.png)
![Dark Theme](/DarkTheme.png)


### Links

- Solution URL: [https://github.com/Samuel-jacobs/todo-app-project](https://github.com/Samuel-jacobs/todo-app-project)
- Live Site URL: [https://samuel-jacobs.github.io/todo-app-project/](https://samuel-jacobs.github.io/todo-app-project/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### About the Project

The project can be divided into different sections and components. 

1. The first overall phase is the main todo app which allows users to add items to a todo list from a form input. the items can be marked as completed and deleted. Then in the todo app there are categories to filter through the todo based on their state of completion, all which shows all the todo items, active which shows the items that are not yet completed, and completed which shows the items that are completed. 
2. The second phase will be the theme switcher, this is a button that switches between the light theme and the dark theme. it uses a custom hook to toggle between the light and dark theme. 
3. The third phase will be the drag and drop section that allows you to rearrange the items based on your priority

The project is divided into 5 components. Home, Header, TodoInput, TodoList, and Todo. Theres also one custom hook for toggling between darkmode and light mode called useToggle. It follows the principle of custom hooks to create a reusable function. 

In the useToggle hook, we use useState to initialize a toggle state, which is set to false by default. we then create a function that reverses the state of the current state based on certain actions. Finally we return an object with the function and the value of the toggle state. this we can use in other components by storing the value and function in a variable. 

#### Home 
In the home component, the Header, the todo input and the todo list are displayed. Here also we call the `useToggle` hook for the first time. We set the toggle function from the hook to `darkToggle` and then the value to `isDarkToggle` which is either false or true. This enables us to have a function we can use to change the value and a variable which is toggled between false and true. we use the variable to create a conditional class for the background so we can change it based on if `isDarkToggle` is true or not. we pass this function and variable into the all the components. Also in the Home page we create a state for the input `setInput` which is a string and can be used to get the value of the input form. we also create a state for the todo `setTodo` which is an array. This is where the user inputs will be stored. This states and their functions are passed down into the `TodoInput` and the `TodoList` variable. 

#### Header
The header component is mostly for a header text and the theme switcher button. since the toggle function and variable have already been passed here from the home page, we just add the function to the onclick attribute of the button. We also use a conditional formatting to set the class for the background of the header. 

#### Todo Input
The Todo input component is pretty straight forward. A form is created, then to handle the form we use the setInput state we passed from the home component. Here we create a function `inputChange` we set the input state to the target value. Also we create a function called `submitHandler` to handle the submission of the form. In the function, we get the todo array and update it by adding an object with 3 propoerties the todo text which is set to the input state, the id whcih is set to a random number, and the complete status `isComplete`  of the todo item which is set to false by default. `todo` is set to the text from the input, the  which is used to track if the item is marked as complete or not. It is set to false by default , and the `id` is set to a random number. 


#### Todolist 
In the todolist. We need to display the todo items, mark a todo item as completed, delete a todo item, and filter the todo item. we also need to implement a drag and drop to rearrange the items how we want. we map around the todo array in an unorderded list and display the todo items. Here is also where we implement the filtering and the drag and drop. 

To display the todos, we use the todo state which we passed from the home component. First we map the todo and display each todo item with a todo component in an unordered list. 


 To implement the filtering, create a status state which checks the state of the todo wether it is completed or not. and a filter todo state where we store the new filtered array. with the status variable we create a switch statement each case representing the status of the todo item namely active, completed, and all for all states. In each switch we update the filtered todo state with the an array with all the todo that matches the status. Then this is where map through the todo to display the todo items. 

To mark the todo item as completed, we have a function called todoComplete. it takes the previous todos and the id of the current todo. if the id matches then the spread operator is called to hold the current items and then set the isCompleted propert to the opposite state. this function is called on clicking the complete icon on the todo item. here the id is also passed. 


```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```



### Continued development

In future projects i want to focus on using next and other frameworks, also using more hooks and applying custom hooks where necessary. In this project i want to add a save to local host. 


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)


## Acknowledgments



