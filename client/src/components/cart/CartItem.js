import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppContext"

const CartItem = ({cartItem, updateTotal}) => {

    const {cart, setCart} = useContext(AppContext)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const deleteItem = () => {
      setCart(cart.filter(item => item._id !== cartItem._id))

    }

    const decreaseQuantity = () => {

      if(quantity <= 1){
        setQuantity(1)
        

      } else {
        setQuantity(quantity - 1)

      }
      
    }

    useEffect(() => {
      updateTotal()
      setCart([...cart])

    }, [quantity])


    const increaseQuantity = () => {
      setQuantity(quantity + 1)
      updateTotal()
      
    }

    if(cartItem){
      cartItem.quantity = quantity

      return (
          <tr>
            <td className='td-description'>{cartItem.description}</td>
            <td>{cartItem.price}</td>
            <td><button className="reduce-btn" onClick={decreaseQuantity}>-</button>{cartItem.quantity}<button className="increase-btn" onClick={increaseQuantity}>+</button></td>
            <td><button onClick={deleteItem} className='delete-btn'><i class="bi bi-trash-fill"></i></button></td>
          </tr>
      )
    }
 
}

export default CartItem