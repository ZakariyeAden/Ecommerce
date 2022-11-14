import React,{useState,useEffect} from 'react'
// import  products  from './data.json'
import products from './Shop/index'
export const ProductsContext = React.createContext();

const  ProductsProvider = (props) => {
  const [productsList, setproductsList] = useState([]);
  const [productDetail, setproductDetail] = useState([]);
  // const [cart, setcart] = useState([]);
  const [modalOpen, setmodalOpen] = useState(true);
  const [modalProduct, setmodalProduct] = useState(productDetail);

  useEffect(() => {
    let temp = [];

    Array.from(products).forEach((item) => {
      const singleItem = {...item};
      temp = [...temp, singleItem];
    });
    setproductsList(temp);
  }, []);
    
  const getItem = (id) => {
    const product = productsList.find((item) => id === item.id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setproductDetail(product);
    console.log(`product is ${product.id}`);
  };

// Modal
  const openModal = (id) => {
    let product = getItem(id);
    setmodalProduct(product);
    setmodalOpen(true);
  };
  const closeModal = () => {
    setmodalOpen(false);
  };
console.log(products);
  return (
    <ProductsContext.Provider 
    value={{
        handleDetail,
        productDetail,
        productsList,
        openModal,
        closeModal,
        modalOpen,
        modalProduct,
    }}
    >
    {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider