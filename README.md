# 🏡 Property Dashboard — React Developer Skill Assessment

A full-stack property management application built with **React**, **Redux Toolkit**, **Tailwind CSS**, **Express**, **MongoDB**, and **Cloudinary**. This app allows users to browse, search, filter, and manage property listings with a modern, responsive UI.

---

#### Project Live Link: https://property-dashboard-drone-tv-chai.vercel.app


## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Frontend
- ✅ **Property Listings** — Fetch and display properties in a responsive card grid
- ✅ **Search & Filter** — Real-time search by name/location + filter by property type (Plot, Villa, Apartment, Commercial, Office)
- ✅ **Add Property Form** — Drag-and-drop image upload with form validation
- ✅ **Property Details Modal** — View full property info with embedded Google Maps
- ✅ **Responsive Design** — Mobile-first UI with collapsible sidebar and hamburger menu
- ✅ **Redux State Management** — Global state for search and API data
- ✅ **Smooth Animations** — Tailwind CSS transitions and modern UI effects

### Backend
- ✅ **RESTful API** — GET, POST, PUT, DELETE endpoints for properties
- ✅ **MongoDB Atlas** — Cloud database integration
- ✅ **Cloudinary Integration** — Image upload and management
- ✅ **File Cleanup** — Auto-delete temporary files after upload
- ✅ **Coordinates Support** — Latitude/longitude for Google Maps integration

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **Redux Toolkit** | State management |
| **Tailwind CSS v4** | Styling and responsive design |
| **React Icons** | Icon library |
| **React Router** | Client-side routing |
| **Vite** | Build tool and dev server |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express** | Web framework |
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | ODM for MongoDB |
| **Cloudinary** | Image hosting and CDN |
| **Multer** | File upload middleware |

---

## 📁 Project Structure

```
property-dashboard/
├── frontend/ # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── AddProperty.jsx
│   │   │   ├── PropertyCard.jsx
│   │   │   └── PropertyDetails.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Properties.jsx
│   │   │   ├── Agents.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── slices/
│   │   │   ├── apiSlice.js
│   │   │   ├── propertyApiSlice.js
│   │   │   └── searchSlice.js
│   │   ├── App.jsx
│   │   ├── Layout.jsx
│   │   ├── store.js
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
└── backend/ # Express backend
    ├── models/
    │   └── Property.js
    ├── controllers/
    │   └── property.controller.js
    ├── routes/
    │   └── property.routes.js
    ├── middleware/
    │   └── multer.middleware.js
    ├── utils/
    │   └── cloudinary.js
    ├── .env
    ├── server.js
    └── package.json
```

---


### Prerequisites
- **Node.js** (v18+)
- **npm** or **yarn**
- **MongoDB Atlas** account
- **Cloudinary** account

---

## 🔐 Environment Variables

### Backend `.env`
```
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:8000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/properties` | Fetch all properties |
| `GET` | `/api/properties/:id` | Get single property by ID |
| `POST` | `/api/properties` | Create new property (with image upload) |
| `PUT` | `/api/properties/:id` | Update property (with optional image) |
| `DELETE` | `/api/properties/:id` | Delete property (removes image from Cloudinary) |

---

## 🎯 Usage

### Start Backend Server
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:8000`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## 📸 Screenshots

### Property Listings Page
<img width="1897" height="908" alt="image" src="https://github.com/user-attachments/assets/aa3de9d4-16ca-4bb7-81a6-734e2181e637" />


### Add Property Modal
<img width="1900" height="906" alt="image" src="https://github.com/user-attachments/assets/4f833f61-6df5-4983-ae77-e3197e625040" />


### Property Details with Map
<img width="1892" height="906" alt="image" src="https://github.com/user-attachments/assets/e60327b0-9168-40d5-98a7-bb5e27773a60" />

### Mobile Responsive View
<img width="438" height="658" alt="image" src="https://github.com/user-attachments/assets/28e85f98-a1c9-4422-b48a-1c66062b69fb" />

---

## 🔧 Key Features Explained

### 1. Search Functionality
Global search state managed via Redux. Search query updates in real-time across components.

```js
// Navbar updates global search
dispatch(setSearchQuery(query));

// Properties page filters based on search
const searchQuery = useSelector((state) => state.search.query);
```

### 2. Image Upload Flow
User selects image → Multer saves to `/public/temp`
→ Cloudinary uploads → Returns URL
→ Local temp file deleted → URL stored in MongoDB

### 3. Google Maps Integration
Embed static maps or interactive iframes using property coordinates:

```html
<iframe src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=28.6139,77.2090"></iframe>
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**  
[GitHub](https://github.com/Shehbaz456) | [LinkedIn](https://www.linkedin.com/in/shehbazlovedev/) | [Portfolio](https://shehbaz456.github.io/Portfolio)

---

## 🙏 Acknowledgments

- React team for the amazing framework  
- Redux Toolkit for simplified state management  
- Tailwind CSS for rapid UI development  
- Cloudinary for image hosting  
- MongoDB Atlas for cloud database

---

## 📞 Support

For issues or questions, please open an issue on **GitHub Issues**.

⭐ If you found this project helpful, please give it a **star!**


