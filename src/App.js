import './App.css';
import Header from "./header";
import Card from "./Card";
import CartItem from './CartItem';
import { useState } from 'react';
function App() {
  const [products,setProduct] = useState([
    {
      id : 1,
      title : "Asus VivoBook 14",
      description : "Intel Core i5,35.56 cm,8GB RAM/256GB HDD",
      price : 45990,
      image : "https://m.media-amazon.com/images/I/716bvqzz7PL._SY450_.jpg"
    },
    {
      id : 2,
      title : "HP 14 11th Gen",
      description : "Intel Core i3,35.56 cm,8GB RAM/512GB HDD",
      price : 58490,
      image: "https://m.media-amazon.com/images/I/71bJqS8ZLTL._AC_UY218_.jpg"
    },
    {
      id : 3,
      title : "Asus TUF Gaming",
      description : "Intel Core i5,39.62 cm,8GB RAM/512GB HDD",
      price : 61990,
      image: "https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY218_.jpg "
    },
    {
      id : 4,
      title : "Dell Inspiron 3501 ",
      description : "Intel Core i5-1135G7 / 8GB / 1TB HDD",
      price : 58290,
      image: "https://m.media-amazon.com/images/I/61zbf9g+VDS._AC_UY218_.jpg "
    },
    {
      id : 5,
      title : "Lenovo Yoga C640 10th Gen",
      description : "Intel Core i5, 33.78cm's /8GB/512GB SSD",
      price : 78500,
      image: "https://m.media-amazon.com/images/I/71NDtDpCrtL._AC_UY218_.jpg "
    },
    {
      id : 6,
      title : "Acer Nitro 5 ",
      description : "AMD Ryzen 5 4600H hexa-core processor / 16GB RAM/512 GB SSD",
      price : 68990,
      image: "https://m.media-amazon.com/images/I/81mxlt2J81L._AC_UY218_.jpg "
    }
  ])

  const [cartItems,setCartItem] = useState([]); 
  const [total,setTotal] = useState(0)
  let addToCart = (id) => {
    let product = products.find(obj => obj.id == id);
    setCartItem([...cartItems,product]);
    setTotal(parseInt(parseInt(total) + parseInt(product.price)))
  }

  let removeItem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if(result){
      let cartIndex = cartItems.findIndex(obj => obj.id == id);
      setTotal(total - cartItems[cartIndex].price)
      cartItems.splice(cartIndex,1);
      setCartItem([...cartItems]);
    }
  }

  return (
    <>
      <Header></Header>
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                products.map((product) => {
                  return <Card data={product}handleCart={addToCart}/>
                })
              }
            </div>
          </div>
          <div className="col-lg-4">
            <ol class="list-group list-group-numbered" style={{ position: "sticky", top: "60px" }}>
              {
                cartItems.length == 0 ? <h3>Cart is empty<i class="fas fa-shopping-cart"></i></h3> : null
              }
            {
              cartItems.map((item) => {
                  return <CartItem handleRemove={removeItem} data={item}/>
              })
            }
             <h1>Total - Rs {total}</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
