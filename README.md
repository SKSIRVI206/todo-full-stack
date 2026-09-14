# Todo Application

# Backend

## Commands

1. npm init

2. npm i express

3. npm i nodemon --save-dev

4. **change in package.json**

5. **"type":"module"**

6. npm i dotenv

7. npm i mongoose

8. npm install mongodb

## MongoDB Connection

Create MongoDB connection using MongoDB Atlas.

```
DB_URL = mongodb+srv://sksirvi206_db_user:mpKJqrwe2RKqfKhF@cluster0.g8d3wco.mongodb.net/?appName=Cluster0
```

## Environment Variables

```
PORT=5000

DB_URL = mongodb+srv://sksirvi206_db_user:mpKJqrwe2RKqfKhF@cluster0.g8d3wco.mongodb.net/?appName=Cluster0
```

## Backend Structure

Backend is created using **Controller-Service-Routes-Models architecture**.

* **Routes** - API endpoints
* **Controllers** - Handle request and response
* **Services** - Handle logic and database operations
* **Models** - MongoDB/Mongoose schema


## To run the app or start the app on local

```
npm run dev
```

# Frontend App

Create frontend app using React Vite.

1. npm create vite@latest

2. After successfully creating app I move inside src folder.

3. Inside src folder I create two folders, one for component and other for context (global state).

4. In component folder I create four files:

   * TodoFilter.jsx
   * TodoForm.jsx
   * TodoItem.jsx
   * TodoList.jsx

5. In context folder create file:

   * todoContext.jsx

6. In todoContext.jsx file I create custom hook for easy providing state and function across the app.


## Frontend Features

* Add Todo
* Display Todo List
* Edit Todo
* Delete Todo
* Update Todo Status
* Filter Todo
* Search Todo
* Global State using Context API
* API integration using Axios
* Loading state
* Error handling
* Notification message


## Loading States

Loading states are added for different API operations.

* Add Todo → `Adding...`
* Delete Todo → `Deleting...`
* Edit Todo → `Saving...`
* Update Status → `Updating...`

## API Integration

Axios is used for communication between frontend and backend.

### GET

Get all todos.

```
GET /api/
```

### POST

Create a new todo.

```
POST /api/
```

### PUT

Update a todo.

```
PUT /api/:id
```

### PATCH

Update todo status.

```
PATCH /api/:id
```

### DELETE

Delete a todo.

```
DELETE /api/:id
```

## Environment Variables

Frontend uses Vite environment variables.

### Local Development

```
VITE_API_URL=http://localhost:5000/api/
```

### Production

```
VITE_API_URL = https://todo-full-stack-ra3x.onrender.com
```


## Deployment

The application is deployed with:

* Backend → Render
```
https://todo-full-stack-ra3x.onrender.com
```
* Frontend → Vercel
```
https://todo-full-stack-vert.vercel.app/

```

##  decisions
1. in local development when i connect mongo db  to server i use 
environment variable like **DB_URL = mongodb+srv://sksirvi206_db_user:mpKJqrwe2RKqfKhF@cluster0.g8d3wco.mongodb.net/?appName=Cluster0** but in mongoose.connect(process.env.Db_URL) it run on local when i push code in production on render i got error like mongose url is undefiend then i correct Db_url to DB_URL
2. in local development i connect frontend  to backend using proxy in vite.config.js. this proxy start with **/api** and trigger backend .
when i add proxy like **/** it trigger only front end not backend 
```
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api': 'http://localhost:5000',
    }
  }
})
```



 

