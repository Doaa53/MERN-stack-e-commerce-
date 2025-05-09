// For user registration
export const registerFormControls = [
  { name: "userName", label: "User Name", placeholder: "Enter your user name", componentType: "input", type: "text" },
  { name: "email", label: "Email", placeholder: "Enter your email", componentType: "input", type: "email" },
  { name: "password", label: "Password", placeholder: "Enter your password", componentType: "input", type: "password" },
];

// For user login
export const loginFormControls = [
  { name: "email", label: "Email", placeholder: "Enter your email", componentType: "input", type: "email" },
  { name: "password", label: "Password", placeholder: "Enter your password", componentType: "input", type: "password" },
];

// For adding a product
export const addProductFormElements = [
  { label: "Image URL", name: "image", componentType: "input", type: "text", placeholder: "Enter image URL" },
  { label: "Title", name: "title", componentType: "input", type: "text", placeholder: "Enter product title" },
  { label: "Description", name: "description", componentType: "textarea", placeholder: "Enter product description" },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "birthday", label: "Birthday" },
      { id: "anniversary", label: "Anniversary" },
      { id: "wedding", label: "Wedding" },
      { id: "sympathy", label: "Sympathy" },
      { id: "congratulations", label: "Congratulations" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "roses", label: "Roses" },
      { id: "tulips", label: "Tulips" },
      { id: "lilies", label: "Lilies" },
      { id: "orchids", label: "Orchids" },
      { id: "daisies", label: "Daisies" },
      { id: "sunflowers", label: "Sunflowers" },
    ],
  },
  { label: "Price", name: "price", componentType: "input", type: "number", placeholder: "Enter product price" },
  { label: "Sale Price", name: "salePrice", componentType: "input", type: "number", placeholder: "Enter sale price (optional)" },
  { label: "Total Stock", name: "totalStock", componentType: "input", type: "number", placeholder: "Enter total stock" },
];

// Menu items for shopping view header
export const shoppingViewHeaderMenuItems = [
  { id: "home", label: "Home", path: "/shop/home" },
  { id: "products", label: "Products", path: "/shop/listing" },
  { id: "birthday", label: "Birthday", path: "/shop/listing" },
  { id: "anniversary", label: "Anniversary", path: "/shop/listing" },
  { id: "wedding", label: "Wedding", path: "/shop/listing" },
  { id: "sympathy", label: "Sympathy", path: "/shop/listing" },
  { id: "congratulations", label: "Congratulations", path: "/shop/listing" },
  { id: "search", label: "Search", path: "/shop/search" },
];

// Map for categories
export const categoryOptionsMap = {
  birthday: "Birthday",
  anniversary: "Anniversary",
  wedding: "Wedding",
  sympathy: "Sympathy",
  congratulations: "Congratulations",
};

// Map for brands
export const brandOptionsMap = {
  roses: "Roses",
  tulips: "Tulips",
  orchids: "Orchids",
  lilies: "Lilies",
  daisies: "Daisies",
  sunflowers: "Sunflowers",
};

// Filters
export const filterOptions = {
  category: [
    { id: "birthday", label: "Birthday" },
    { id: "anniversary", label: "Anniversary" },
    { id: "wedding", label: "Wedding" },
    { id: "sympathy", label: "Sympathy" },
    { id: "congratulations", label: "Congratulations" },
  ],
  brand: [
    { id: "roses", label: "Roses" },
    { id: "tulips", label: "Tulips" },
    { id: "orchids", label: "Orchids" },
    { id: "lilies", label: "Lilies" },
    { id: "daisies", label: "Daisies" },
    { id: "sunflowers", label: "Sunflowers" },
  ],
};

// Sort options
export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

// For address form
export const addressFormControls = [
  { label: "Address", name: "address", componentType: "input", type: "text", placeholder: "Enter your address" },
  { label: "City", name: "city", componentType: "input", type: "text", placeholder: "Enter your city" },
  { label: "Pincode", name: "pincode", componentType: "input", type: "text", placeholder: "Enter your pincode" },
  { label: "Phone", name: "phone", componentType: "input", type: "text", placeholder: "Enter your phone number" },
  { label: "Notes", name: "notes", componentType: "textarea", placeholder: "Enter any additional notes" },
];