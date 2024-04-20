// 1. Book
interface Book{
  title: string;
  author: string;
  year: number;
}

const book: Book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
  };
  
  // 2. Product
  interface Product {
    name: string;
    price: number;
    category: string;
  }
  
  const product: Product = {
    name: "T-Shirt",
    price: 19.99,
    category: "Clothing",
  };
  
  // 3. User
  interface User {
    id: number;
    username: string;
    email: string;
  }

const user: User = {
    id: 123,
    username: "johndoe",
    email: "johndoe@example.com",
  };
  
  
  
  
  console.log(book, product, user );
