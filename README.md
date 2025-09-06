# EcoFinds---Sustainable-Second-Hand-Marketplace
EcoFinds is a trusted second-hand marketplace designed to make buying and selling pre-owned goods simple, secure, and sustainable. By extending product lifecycles and reducing waste, it fosters a conscious community that embraces responsible consumption and promotes a circular economy.

---

# 🌟 Overview  
EcoFinds is a vibrant and trusted platform that revolutionizes the way people buy and sell pre-owned goods. Our mission is to foster a culture of sustainability by extending the lifecycle of products, reducing waste, and providing an accessible and convenient alternative to purchasing new items.  

# 🎯 Vision  
To become the go-to destination for a conscious community seeking unique finds and responsible consumption, promoting a circular economy that benefits both people and the planet.  

---

# ✨ Features  

## 🔐 Core Functionality  
- **User Authentication:** Secure registration and login system  
- **Profile Management:** Create and edit user profiles with customizable usernames  
- **User Dashboard:** Comprehensive profile management interface  

## 📦 Product Management  
- **Product Listing Creation:** Add new listings with title, description, category, price, and images  
- **CRUD Operations:** View, edit, and delete personal product listings  
- **Image Upload:** Support for product image placeholders and uploads  
- **Category Management:** Organize products by predefined categories  

## 🔍 Discovery & Shopping  
- **Product Browsing:** Browse all available listings with essential information  
- **Advanced Search:** Keyword-based search functionality  
- **Category Filtering:** Filter products by specific categories  
- **Product Details:** Detailed view of individual products  
- **Shopping Cart:** Add products to cart for easy purchasing  
- **Purchase History:** Track previous purchases and order history  

---

# 🖥️ User Interface  

### 📱 Core Screens  
- **Login/Sign Up:** Secure authentication interface  
- **Product Feed:** Main browsing experience with search and filters  
- **Add Product:** Intuitive product listing creation  
- **My Listings:** Personal inventory management  
- **Product Details:** Comprehensive product information  
- **User Dashboard:** Profile management and settings  
- **Shopping Cart:** Cart management and checkout  
- **Purchase History:** Order tracking and history  

---

# 🛠️ Technology Stack  

### Frontend  
- Framework: React  
- Styling: CSS/JS    

### Backend  
- Server: Node.js/Python(Django)  
- Database: PostgreSQL  
- Authentication: [JWT/Supbase Auth/OAuth]  

### Development Tools  
- Version Control: Git & GitHub  
- Package Manager: npm/pip  
- Testing: Unit Tests  

---

# 🚀 Getting Started  

### Prerequisites  
- Node.js (v14 or higher)  
- npm or yarn  
- Git  

### Installation  

```bash
# Clone the repository
git clone https://github.com/khushboocodes/EcoFinds---Sustainable-Second-Hand-Marketplace.git
cd EcoFinds---Sustainable-Second-Hand-Marketplace

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start the development server
npm start
# or
yarn start
```

---

# 📁 Project Structure

```bash
project_full_connected/
│
├── backend/                         # Django backend
│   ├── manage.py
│   ├── requirements.txt              # Django, DRF, SimpleJWT, corsheaders
│   ├── danjo/                        # Django project root
│   │   ├── _init_.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   └── accounts/                     # Custom accounts app
│       ├── _init_.py
│       ├── admin.py
│       ├── apps.py
│       ├── migrations/
│       │   └── _init_.py
│       ├── models.py                 # Custom User (AbstractUser subclass)
│       ├── serializers.py            # Register + User serializers
│       ├── urls.py                   # /api/accounts/register/ + /api/accounts/me/
│       └── views.py                  # RegisterView, ProfileView
│
├── frontend/                         # React frontend
│   ├── package.json                  # React + React Router + proxy for /api
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js                    # Routing setup
│       ├── api.js                    # fetch wrapper with auto-refresh
│       ├── utils/
│       │   └── auth.js               # token storage + helpers
│       └── pages/                    # React pages
│           ├── Login.js              # Login form
│           ├── Register.js           # Register form
│           └── Dashboard.js          # Protected dashboard (profile info)
│
└── original_project/                 # Your original uploaded files (kept intact)
```

---

# 🧪 Testing

Run the test suite:
```bash
npm test
```

For coverage reports:
```bash
npm run test:coverage
```
---

#🚦 API Documentation
Authentication Endpoints

```bash
POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/profile - Get user profile
Product Endpoints
GET /api/products - Get all products
POST /api/products - Create new product
GET /api/products/:id - Get product details
PUT /api/products/:id - Update product
DELETE /api/products/:id - Delete product
```
```bash
Cart Endpoints
GET /api/cart - Get user's cart
POST /api/cart - Add item to cart
DELETE /api/cart/:id - Remove item from cart
```

---

---
# 🤝 Contributing

We welcome contributions! Please see our Contributing Guidelines for details.
Development Workflow

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add some amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
```
---

# 🎨 Design Resources
### Wireframes include:
Login/Sign Up Screen
Product Listing Feed
Add New Product Screen
My Listings Management
Product Detail View
User Dashboard
Shopping Cart Interface
Purchase History

----

# 🌍 Environmental Impact
EcoFinds contributes to environmental sustainability by:
♻️ Reducing Waste: Extending product lifecycles
🔄 Circular Economy: Promoting reuse over disposal
🌱 Carbon Footprint: Reducing manufacturing demand
👥 Community Building: Creating sustainable consumption habits

---

# 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
