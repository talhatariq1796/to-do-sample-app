### Todo List Application

## Overview

This Todo List application is built using React and Redux. It allows users to manage their tasks by adding new todos and marking them as completed. The application ensures a seamless user experience with real-time updates and a simple interface.

### Features

## Add New Task: Users can add new tasks to the todo list by providing a title and an optional description.

1. Toggle Task Completion: Users can mark tasks as completed or incomplete by clicking on a checkbox next to each task.
2. Task Ordering: Completed tasks are moved to the bottom of the list, while incomplete tasks remain at the top, maintaining their original order within each group.

3. Task Editing: Added the functionality so that user can edit the uncompleted tasks and provided the Editing form.

4. Task Removing: Completed and tasks that are not completed can be removed.

5. Toggle Description: hidden by default then user can toggler.

## Getting Started

# To run the Todo List application locally:

Clone this repository to your local machine.

Install dependencies by running the following command:

- npm install

Start the development server by running:

- npm run dev

Open your browser and navigate to http://localhost:3000 to view the application.

### Application Structure

The application consists of the following components:

1. #### TodoForm:

   This component allows users to add new tasks to the todo list. It includes input fields for title and description, and a submit button to add the task.

2. #### TodoList:

   This component displays the list of tasks. Each task is represented as a card with a title, description, and a checkbox to mark it as completed. Completed tasks are visually distinguished with a line-through style.

3. #### reducers.js:

   a. In the ADD_TODO case of the todoReducer function, a new todo item is created with an incremented id using the idCounter in the initial state. This new todo is then added to the todos array in the state, ensuring that it appears at the top of the list.

   b. In the TOGGLE_TODO case, the todoReducer toggles the completion status of a todo item based on the id provided in the action payload. It maps through the todos array in the state and updates the completed status of the todo with the matching id. The completed property is toggled from true to false or vice versa, depending on its current value.

4. #### actions.js

   a. The addTodo function takes title and description as parameters and constructs an action object with these values in the payload. This action is dispatched when a new todo is added to the list.

   b. The toggleTodo function takes the id of the todo to be toggled as a parameter and constructs an action object with the id in the payload. This action is dispatched when a todo's completion status is toggled.

### Redux Integration

Redux is used for state management in the Todo List application. The state includes an array of todos, each containing an id, title, description, and completed status. Redux actions and reducers handle adding new todos and toggling the completion status of existing todos.

### Dependencies

The application utilizes the following dependencies:

1. react
2. redux
3. react-redux: Official React bindings for Redux
   
### Contributing

Contributions to the Todo List application are welcome! If you have any suggestions for improvements or would like to report a bug, please open an issue or submit a pull request.

This README provides an overview of the Todo List application, including its features, setup instructions, application structure, Redux integration, dependencies, and contribution guidelines. Feel free to customize it further based on your specific requirements or preferences.
