import {useState,useRef} from 'react'


function OrderFrom() {
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


// third approacj to extract data from a form is using nativa browser object FormData() as bellow
  function handleOrderFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    // used to get just on input out of the form
    console.log(formData.get('email'));

    // used to extract all data from the form and transformimg the into an object
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    //used to reset data after submission
    event.target.reset();
  }



  return (
    <>
      <h1><strong>Checkout</strong></h1>
      <p>Total Amount $89.95</p>

      <form onSubmit={handleOrderFormSubmit} className="control">
        <label htmlFor="fullName"><strong>Full Name</strong></label>
        <input type="text" name="fullName" />
        <label htmlFor="email"><strong>E-Mail Address</strong></label>
        <input type="email" name="email" />
        <label htmlFor="street"><strong>Street</strong></label>
        <input type="text" name="street"/>
        <div className="control-row">
          <label htmlFor="postalCode"><strong>Postal Code</strong></label>
          <input type="text" name="postalCode" />
          <label htmlFor="city"><strong>City</strong></label>
          <input type="text" name="city"/>
        </div>
        <div className="control-row">
          <button className='button'>Close</button>
          <button type="submit" className='button'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default OrderFrom
