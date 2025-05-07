import {useState,useContext} from 'react'
import CartContext from "./states.jsx"

function OrderFrom({handleFormCloseBtn,totalPrice}) {
  const [closeForm,setCloseForm]= useState(true);
  const cartItems = useContext(CartContext);

// first Approach to extract data from a form is using useState as bellow
// const [formData, setFormData] = useState({
//   "fullName":'',
//   "email":'',
//   "street": '',
//   "postalCode": '',
//   "city": ''
// })
  // function handleInputChange(identfier,event){
  //   setFormData(prev => ({
  //     ...prev,
  //     [identfier]: event.target.value
  //   }));
  // }

// second Approach to extract data from a form is using useRef as bellow
// const fullName = useRef('');


// third approach to extract data from a form is using nativa browser object FormData() as bellow
  function handleOrderFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    // used to get just on input out of the form
    // console.log(formData.get('email'));

    // used to extract all data from the form and transformimg the into an object
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    console.log('cart items: ', cartItems[0].items);

    fetch('http://localhost:3000/orders',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order: {
          items: cartItems[0].items,
          customer: data
        }
      })
    });

    //used to reset data after submission
    event.target.reset();
    setCloseForm(false);
    handleFormCloseBtn();
  }

  return (
    <>
    { closeForm ?
      <><h1><strong>Checkout</strong></h1>
      <p>Total Amount £{totalPrice}</p>
      <form onSubmit={handleOrderFormSubmit} className="control">
        <label htmlFor="name"><strong>Full Name</strong></label>
        <input type="text" name="name" required/>
        <label htmlFor="email"><strong>E-Mail Address</strong></label>
        <input type="email" name="email"required/>
        <label htmlFor="street"><strong>Street</strong></label>
        <input type="text" name="street" required/>
        <div className="control-row">
          <label htmlFor="postal-code"><strong>Postal Code</strong></label>
          <input type="text" name="postal-code" required/>
          <label htmlFor="city"><strong>City</strong></label>
          <input type="text" name="city" required/>
        </div>
        <div className="control-row">
          <button type='button' onClick={()=>{handleFormCloseBtn()
            setCloseForm(false);
          }}className='button'>Close</button>
          <button type="submit" className='button'>Submit</button>
        </div>
      </form></>
    : null
     }
    </> )
}

export default OrderFrom
