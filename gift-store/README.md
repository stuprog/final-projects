# Gift Store

You will be creating a full-stack application to manage your gift store. It will allow the owner of the stoer to execute all CRUD operations on his gifts,. In order to do this you will be using MongoDB with the [Mongoose ODM](http://mongoosejs.com/). Your front end will display views created from data in the database. You will use [ReactJS](https://facebook.github.io/react/) for that, and will serve your application with a [NodeJS](https://nodejs.org/) web server, using [ExpressJS](https://expressjs.com/).

Please work on the following features **in order**, moving on to the next feature only after the one you are working on is complete. **Please commit WORKING code early and often**. In addition, after each step, please follow the guidelines for a commit message.

### Part 1 - Products Table

1. **As a user**, I want to be able to view the products I have in my database. If no product are present in the database, I will have to see a message indicating that `You have no product` and a button to create new ones.

To implement this user story, you should:

- Write an ExpressJS web server that listens to request on port `8000`.
- Run this command to create a brand new React App in a folder named `client`. Then navigate to it.
  ```
  npx create-react-app client
  cd client/
  ```
- You may want to use [React Router](https://reactrouter.com/) or [Conditional Rendering](https://www.reactjs.org/docs/conditional-rendering.html) to navigate between components.
- Write a script that would add the dummy data to your database when `npm run seed-database` is run from the command line. Add this command to the `package.json` to be able to run it with `npm`. When you have this working, run the command so that your database is populated.
  \_Note: Create a Product Schema under `server/models/Product.js`. It should have these following attributes:
  - `id`: Number
  - `category`: String
  - `quantity`: Number
  - `brand`: String
  - `image`: String _(the url of the image)_
- Complete the route `/api/products` in `server/routes/products.routes.js` so that requests to this route are responded to with the data for all the products, retrieved from the database.
- You can use the `dummy_data.js` for your front end views. Then, you can refactor your front end to retrieve seed data from the server rather than using the dummy data.
- Render the products in a `Table` containing the image, the name, the brand, the category, the price and the quantity
- **WHEN COMPLETE AND WORKING, make a commit that says `Part 1 Complete`**

### Part 2 - Create new Products

1. **As a user**, I want to be able to create new products and save them in the database. Create a `NewTask` component containing these inputs:

- `Name`: text
- `Category`: text
- `Quantity`: positive number
- `Price`: positive number
- `Image`: text (the url of the image)

The data from the form should be sent to `/api/products` and saved to the database.

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 2 Complete`**

### Part 3 - Edit Existing Products

1. **As a user**, I want to update the existing products in my management system.

- With every `Row` in the products table, there should be an `Edit` button.
- When the user clicks on `Edit`, a `Modal` should be rendered
- The `Modal` should contain a form similar to the `CreateProduct` form
- The inputs should be prefilled with `defualtValues` of the product data with 2 buttons (`save` / `cancel`)
- The user can click on `Cancel` to cancel changes
- The user can update the data and click on `save`
- The Modal should be closed and the `Table` should be updated with the nes data
- You should send a PUT request to `/api/products/:id` with the new data from the form

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 3 Complete`**

### Part 4 - Delete existing products

1. **As a user**, I want to delete products.

- With every `Row` in the products table, there should be a `Delete` button.
- When the user clicks on `Delete`, a `Modal` should be rendered
- The `Modal` should contain 2 buttons: `Confirm` and `Cancel`
- Clicking on `Cancel` will close the Modal
- Clicking on `Delete` should delete the selected Product and close the Modal
- The deleted Product should no longer appear in the `ProductsList`

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 4 Complete`**

### Part 5 - Predefined Categories

1. **As a user**, I want to group products by category

- Create a `Category.js` model, `categories.routes.js` router, and a `categories.controller.js` controller
- Each Category should have:
  - id: String
  - title: String
- Create new categories through Postman
- Refactor the Category input in `CreateProduct` form to be a `Dropdown` containing the categories' titles

- **WHEN COMPLETE AND WORKING, make a commit that says `Part 5 Complete`**

### API Structure

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section

Using the existing code provided in `server/`, follow the steps below to build out a Paintings API:

|        URL        | HTTP Verb | Request Body |                            Result                            |
| :---------------: | :-------: | :----------: | :----------------------------------------------------------: |
|   /api/products   |    GET    |    empty     |                 Return JSON of all products                  |
|   /api/products   |   POST    |     JSON     |    Create new Product and return JSON of created Product     |
| /api/products/:id |  DELETE   |    empty     |       Return JSON of single Product with matching `id`       |
| /api/products/:id |    PUT    |     JSON     | Update Product with matching `id` and return updated Product |
|  /api/categories  |   POST    |     JSON     |                    Create a new category                     |
|  /api/categories  |    GET    |     JSON     |                Return JSON of all categories                 |

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
