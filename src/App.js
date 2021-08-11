import "./App.css";
import React from "react";
import Header from "./header";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";
function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Asus VivoBook 14",
      description: "Intel Core i5,35.56 cm,8GB RAM/256GB HDD",
      price: 100,
      image: "https://m.media-amazon.com/images/I/716bvqzz7PL._SY450_.jpg",
      count: 1,
      disable:true,
    },
    {
      id: 2,
      title: "HP 14 11th Gen",
      description: "Intel Core i3,35.56 cm,8GB RAM/512GB HDD",
      price: 200,
      image: "https://m.media-amazon.com/images/I/71bJqS8ZLTL._AC_UY218_.jpg",
      count: 1,
      disable:true,
    },
    {
      id: 3,
      title: "Asus TUF Gaming",
      description: "Intel Core i5,39.62 cm,8GB RAM/512GB HDD",
      price: 300,
      image: "https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY218_.jpg ",
      count: 1,
      disable:true,
    },
    {
      id: 4,
      title: "Dell Inspiron 3501 ",
      description: "Intel Core i5-1135G7 / 8GB / 1TB HDD",
      price: 400,
      image: "https://m.media-amazon.com/images/I/61zbf9g+VDS._AC_UY218_.jpg ",
      count: 1,
      disable:true,
    },
    {
      id: 5,
      title: "Lenovo Yoga C640 10th Gen",
      description: "Intel Core i5, 33.78cm's /8GB/512GB SSD",
      price: 500,
      image: "https://m.media-amazon.com/images/I/71NDtDpCrtL._AC_UY218_.jpg ",
      count: 1,
      disable:true,
    },
    {
      id: 6,
      title: "Acer Nitro 5 ",
      description:
        "AMD Ryzen 5 4600H hexa-core processor / 16GB RAM/512 GB SSD",
      price: 600,
      image: "https://m.media-amazon.com/images/I/81mxlt2J81L._AC_UY218_.jpg ",
      count: 1,
      disable:true,
    }
  ]);

  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  

  let addToCart = id => {
    let product = products.find(obj => obj.id === id);
    product.quantity = qty;
    filterData[id-1].disable = true;
    setCartItem([...cartItems, product]);
    setTotal(total + product.price);
  };

  let removeItem = id => {
    let result = window.confirm("Are you sure do you want to remove?");
    if (result) {
      let cartIndex = cartItems.findIndex(obj => obj.id === id);
      setTotal(total - cartItems[cartIndex].price);
      cartItems.splice(cartIndex, 1);
      setCartItem([...cartItems]);
    }
  };
  const getSearchTerm = e => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  const filterData = products.filter(searchData => {
    return searchData.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const [qty, setQty] = useState(1);
    let increment = (id) => {
    let incrementQty = products.find((obj) => obj.id === id);
    filterData[id-1].count++
    setTotal(total+ incrementQty.price)
   };
  let decrement = (id) => {
    let decrementQty = products.find((obj) => obj.id === id);
    filterData[id-1].count--;
    setTotal(total - decrementQty.price)
    
    };



  return (
    <>
      <Header getSearchTerm={getSearchTerm}></Header>
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {filterData.map(product => {
                return (
                  <Card
                    data={product}
                    handleCart={addToCart}
                    increment={increment}
                    decrement={decrement}
                    quantity={qty}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <ol
              class="list-group list-group-numbered"
              style={{ position: "sticky", top: "60px" }}
            >
              {cartItems.length === 0 ? (
                <h3>
                  Cart is empty<i class="fas fa-shopping-cart"></i>
                </h3>
              ) : null}
              {cartItems.map(item => {
                return (
                  <CartItem
                    handleRemove={removeItem}
                    data={item}
                    quantity={qty}
                  />
                );
              })}
              <h1>Total - Rs {total}</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
