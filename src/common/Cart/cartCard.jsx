import React, {useState} from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { API } from '../../config'
import axios from 'axios'
export default function cartCard(item) {

    const updateCart = (item) => {
        const cred = { user_id: item.user_id, product_id: item.product_id._id, }
        let url = `${API.localhost}/product/add-to-cart`;
        axios.post(url, cred).then((res) => {
            console.log("api res---- update cart", res.data)
            // setCart([...cartItem, {...item, product_qty: res.data.product_qty}])
            // setCart(cartItem.map((val) =>
            //     (item.product_id._id == val.product_id._id) ?
            //         { ...val, product_qty: res.data.data.product_qty } : val))
            // console.log('----------get item filter', cartItem.filter((val) => { return val }))

        }).catch((err) => {
            console.log("-----errr", err)
        })
    }
    const productQty = item.product_id.p_price * item.product_qty
    return (
        <><div className='cart-list product d_flex' key={item.id}>
            <div className='img'>
                <img src={item.product_id.p_image} alt='' />
            </div>
            <div className='cart-details'>
                <h3>{item.product_id.p_name}</h3>
                <h4>
                    ${item.product_id.p_price}.00 * {item.product_qty}
                    <span>${productQty}.00</span>
                </h4>
            </div>
            <div className='cart-items-function'>
                <div className='removeCart'>
                    <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                    </button>
                </div>
                <div className='cartControl d_flex'>
                    <button className='incCart' onClick={() => updateCart(item)}>
                        <FiPlus />
                    </button>
                    <p>{item.product_qty}</p>
                    <button className='desCart' onClick={() => updateCart(item)}>
                        <FiMinus />
                    </button>
                </div>
            </div>

            <div className='cart-item-price'></div>
        </div></>
    )
}

