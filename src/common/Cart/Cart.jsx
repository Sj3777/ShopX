import React, { useEffect, useState } from "react"
import "./cart-style.css"
import { API } from '../../config'
import cartCard from "./cartCard"
import axios from 'axios'


const Cart = () => {
  // Stpe: 7   calucate total of items
  const [prod, setCartFlag] = useState();
  const user = JSON.parse(localStorage.getItem('user'))
  let totalPrice, tax, deliveryCharge, grandTotal;
  const [cartItem, setCart] = useState([])
  useEffect(() => {
    getCartItems();
  }, [])
  const getCartItems = () => {
    let url = `${API.localhost}/product/get-cart`;
    axios.get(url, {
      headers: {
        'user_id': user._id
      }
    }).then((res) => {
      console.log("api res----", res.data.Data)
      setCart(res.data.Data)
    }).catch((err) => {
      console.log("-----errr", err)
    })
  }

  // const updateCart = (item, flag) => {
  //   const cred = { user_id: user._id, product_id: item.product_id._id, cart_action: flag }  
  //   let url = `${API.localhost}/product/add-to-cart`;
  //   axios.post(url, cred).then((res) => {
  //     console.log("api res---- update cart", res.data)
  //     // setCart([...cartItem, {...item, product_qty: res.data.product_qty}])
  //     setCart(cartItem.map((val) => 
  //     (item.product_id._id == val.product_id._id) ? 
  //     {...val, product_qty: res.data.data.product_qty} : val))
  //     console.log('----------get item filter', cartItem.filter((val) =>{ return val }))
      
  //   }).catch((err) => {
  //     console.log("-----errr", err)
  //   })

  // }
  // prodcut qty total
  totalPrice = cartItem.reduce((price, item) => price + item.product_qty * item.product_id.p_price, 0)
  tax = (totalPrice * 18 / 100)
  deliveryCharge = (totalPrice * 2 / 100)
  grandTotal = totalPrice + tax + deliveryCharge

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {cartItem.map((item) => {
              return (
                <cartCard cartItem={item} />
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Product Total :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <div className=' d_flex'>
              <h4>Tax and services - 18% :</h4>
              <h3>${tax}.00</h3>
            </div>
            <div className=' d_flex'>
              <h4>Delivery Charges - 1% :</h4>
              <h3>${deliveryCharge}.00</h3>
            </div>

            <div className='tot_price d_flex'>
              <h4>Total Price :</h4>
              <h3>${grandTotal}.00</h3>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
