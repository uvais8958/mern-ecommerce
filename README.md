# MERN E-Commerce

A full-stack e-commerce web application built with the MERN stack ---
MongoDB, Express.js, React.js, and Node.js.

## 🚀 Features

-   Product management
-   Create and manage products
-   Product details
-   Shopping cart functionality
-   User authentication
-   Order management
-   RESTful APIs
-   MongoDB database integration
-   Responsive user interface
-   Error handling and API validation

## screenshorts

## Signup Form

![signupForm](/frontend/src/assets/Signup-page.png)

![signupdata](/frontend/src/assets/signupData.png)

## Login Form

![loginForm](/frontend/src/assets/login.png)

## Product-List-for-admin

![productList](/frontend/src/assets/productList.png)

## Add products-by-admin
![addProducts](/frontend/src/assets/addProdcut.png)

## Edit List product-by-admin
![editeProduct](/frontend/src/assets/editProduct.png)


## 🛠️ Tech Stack

### Frontend

-   React.js
-   JavaScript
-   HTML5
-   CSS3
-   Tailwind-Css

### Backend

-   Node.js
-   Express.js
-   REST API
-   MongoDB
-   Mongoose

### Tools

-    GitHub
-   Thunder Client
-   VS Code
-   npm

## 📁 Project Structure

``` text
mern-ecommerce/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

``` bash
git clone https://github.com/uvais8958/mern-ecommerce.git
cd mern-ecommerce
```

### 2. Install backend dependencies

``` bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder:

``` env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the backend

``` bash
npm run dev
```

### 5. Install and start the frontend

Open a new terminal:

``` bash
cd frontend
npm install
npm run dev
```

## 🔗 API Example

### Create Product

``` http
POST /api/products/add
```

Example request body:

``` json
{
  "title": "MacBook Air M2",
  "price": 85000,
  "description": "Apple M2 chip laptop",
  "image": "https://example.com/macbook.jpg",
  "stock": 10
}
```

## 🔐 Environment Variables

Never commit your `.env` file to GitHub.

Add the following to `.gitignore`:

``` text
node_modules/
.env
```

## 📌 Future Improvements

-   Payment gateway integration
-   Admin dashboard
-   Product search and filtering
-   Product reviews and ratings
-   Wishlist
-   Image upload
-   Production deployment

## 👨‍💻 Author

**Uvais Ansari**

GitHub: https://github.com/uvais8958

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.
