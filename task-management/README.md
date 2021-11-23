# Task Management System

You will be creating a full-stack application to manage and organize tasks like [Trello](https://trello.com/). It will allow the user to execute all CRUD operations on his tasks,. In order to do this you will be using MongoDB with the [Mongoose ODM](http://mongoosejs.com/). Your front end will display views created from data in the database. You will use [ReactJS](https://facebook.github.io/react/) for that, and will serve your application with a [NodeJS](https://nodejs.org/) web server, using [ExpressJS](https://expressjs.com/).

Please work on the following features **in order**, moving on to the next feature only after the one you are working on is complete. **Please commit WORKING code early and often**. In addition, after each step, please follow the guidelines for a commit message.

### Part 1 - Paintings Gallery

1. **As a user**, I want to be able to view the tasks I have in my app. If no paintings are present in the database, I will have to see a message indicating that `You have no tasks` and a button to create new ones.

To implement this user story, you should:

- Write an ExpressJS web server that listens to request on port `8000`.
- Run this command to create a brand new React App in a folder named `client`. Then navigate to it.
  ```
  npx create-react-app client
  cd client/
  ```
- You may want to use [React Router](https://reactrouter.com/) or [Conditional Rendering](https://www.reactjs.org/docs/conditional-rendering.html) to navigate between components.
- Write a script that would add the dummy data to your database when `npm run seed-database` is run from the command line. Add this command to the `package.json` to be able to run it with `npm`. When you have this working, run the command so that your database is populated.
  \_Note: Create a Task Schema under `server/models/Task.js`. It should have these following attributes:
  - `id`: Number
  - `title`: String
  - `deadline`: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - `isCompleted`: Boolean _(`true` if completed, `false` if not )_
- Complete the route `/api/tasks` in `server/routes/tasks.routes.js` so that requests to this route are responded to with the data for all the tasks, retrieved from the database.
- You can use the `dummy_data.js` for your front end views. Then, you can refactor your front end to retrieve seed data from the server rather than using the dummy data.
- Render each task in a `Card` containing the image, the title, the deadline, and the status (`completed` / `in progress`).
- **WHEN COMPLETE AND WORKING, make a commit that says `Part 1 Complete`**

### Part 2 - Create new Tasks

1. **As a user**, I want to be able to create new Tasks and save them in the database. Create a `NewTask` compoenenr containing these inputs:

- `Title`: text
- `Deadline`: date

The data from the form should be sent to `/api/tasks` and saved to the database.

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 2 Complete`**

### Part 3 - Edit Existing Tasks

1. **As a user**, I want to update the titles of existing tasks in my management system.

- With every Task Card, there should be an `Edit` button.
- When the user clicks on `Edit`, the title becomes an editable input with 2 buttons (`save` / `cancel`)
- The input should be **prefilled** with the title of the selected task
- The user can click on `Cancel` to cancel changes
- The user can update the data and click on `save`
- You should send a PUT request to `/api/tasks/:id`
- The editable input and the buttons should disappear

2. **As a user**, I want to mark tasks as done.

- With every Task Card, there should be an `check` button.
- When the user clicks on the `check` button, the status of the button should become `done`
- You should send a PUT request to `/api/tasks/:id/complete`

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 3 Complete`**

### Part 3 - Overdued Tasks

1. **As a user**, I want to know which of my tasks are overdue

- With every Task Card, there should be `Badge`.
- This Badge should only appear when the task deadline is overdue

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 4 Complete`**

### Part 4 - Delete Tasks

1. **As a user**, I want to be able to delete existing tasks from the database

- Each task card will contain a `Delete` button
- When the user clicks on the `Delete` button, a `Modal` will be rendered with 2 options: `Confirm` and `Cancel`
- Clicking on `Confirm` will delete the task and close the modal
- The task will no longuer exist in the `TasksList` component

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 4 Complete`**

### API Structure

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section

Using the existing code provided in `server/`, follow the steps below to build out a Paintings API:

|           URL           | HTTP Verb | Request Body |                                    Result                                    |
| :---------------------: | :-------: | :----------: | :--------------------------------------------------------------------------: |
|       /api/tasks        |    GET    |    empty     |                           Return JSON of all tasks                           |
|       /api/tasks        |   POST    |     JSON     |               Create new Task and return JSON of created Task                |
|     /api/tasks/:id      |  DELETE   |    empty     |                Return JSON of single Task with matching `id`                 |
| /api/tasks/:id/complete |    PUT    |    empty     |             Update Task isCompleted to `true` with matching `id`             |
|     /api/tasks/:id      |    PUT    |     JSON     | Update Task isCompleted to `true` with matching `id` and return updated Task |

## Available Resources

- [Stack Overflow](http://stackoverflow.com/)
- [MDN](https://developer.mozilla.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
- [Mongo Docs](https://www.mongodb.com/)
- [Mongoose ODM Docs](http://mongoosejs.com/)
- [Cloudinary API](https://cloudinary.com/documentation/node_integration)
- [ReactJS Docs](https://facebook.github.io/react/)
- [React Router Docs](https://github.com/ReactTraining/react-router/tree/master/docs)
- [NodeJS Docs](https://nodejs.org/)
- [Postman](https://www.getpostman.com/)
- Docs for any npm packages you might use
