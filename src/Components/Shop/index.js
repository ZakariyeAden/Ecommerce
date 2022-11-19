import BrownThobe from '../Assets/Thobes/BrownThobe.jpg'
import GoldThobe from '../Assets/Thobes/Gold.jpg'
import WhiteThobe from '../Assets/Thobes/White.jpg'
import BlackCap from '../Assets/Caps/BlackCap.png'
import GrayCap from '../Assets/Caps/CapGray.png'
import AbayaCream from '../Assets/Abaya/AbayaCream.png'
import GreenAbaya from '../Assets/Abaya/GreenAbaya.png'

 const products = [
  {
    id: 0,
    price: 12.99,
    title: "Gold Thobe",
    image: GoldThobe,
    description:"Tax included. Shipping calculated at checkout.",
    detailWidth:"250px",
    button:"Add to Cart",
  },
  {
    id: 1,
    price: 12.99,
    title: "White Thobe",
    image: WhiteThobe,
    description:"Tax included. Shipping calculated at checkout.",
    detailWidth:"250px",
    button:"Add to Cart",
  },
  {
    id: 2,
    price: 12.99,
    title: "Brown Thobe",
    image: BrownThobe,
    description:"Tax included. Shipping calculated at checkout.",
    detailWidth:"250px",
    button:"Add to Cart",
  },
  {
    id: 3,
    price: 11.99,
    title: "Abaya Cream",
    image: AbayaCream,
    width:"200", 
    description:"Tax included. Shipping calculated at checkout.", 
    detailWidth:"250px",  
    button:"Add to Cart",
  },
  {
    id: 4,
    price: 11.99,
    title: "Green Abaya",
    image: GreenAbaya,
    description:"Tax included. Shipping calculated at checkout.",
    detailWidth:"250px",
    width:"200",
   
    button:"Add to Cart",
  },
  {
    id: 5,
    price: 8.99,
    title: "Black Cap",
    image: BlackCap,
    width:"200",
    description:"Tax included. Shipping calculated at checkout.",
    detailWidth:"250px",
    button:"Add to Cart",
  },
  {
    id: 6,
    price: 8.99,
    title: "Gray Cap",
    image: GrayCap,
    width:"200",
    detailWidth:"10",
    description:"Tax included. Shipping calculated at checkout.",
    detailWidth:"250px",
    button:"Add to Cart",
  },
];

export default products;