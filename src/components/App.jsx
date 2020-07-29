import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [click, setClick] = useState("");


  function holdChange(event){

    //hold the user's input name property and value property
    const {name, value} = event.target;

    setContact((prevValue) => {

      if( name === "userfName"){
        return{
          //only modifies fName object
          fName : value,
          lName : prevValue.lName,
          email : prevValue.email
        }
      }
      else if ( name === "userlName"){
        return{
          fName : prevValue.fName,
          lName : value,
          email : prevValue.email
        }
      }
      else if ( name === "useremail"){
        return{
          fName : prevValue.fName,
          lName : prevValue.lName,
          email : value
        }
      }
    });
  }
  


  function handleClick(event){

    setClick([(contact.fName) , (contact.lName), (contact.email)]);    
    event.preventDefault();
  }




  return (
    <div className="container">
      <h1> Hello {click[0]} {click[1]}</h1>
      <p>email: {click[2]}</p>

      <form onSubmit = {handleClick}>


        <input onChange= {holdChange} name="userfName" value={contact.fName} placeholder="First Name" />
        <input onChange= {holdChange} name="userlName" value={contact.lName} placeholder="Last Name" />
        <input onChange= {holdChange} name="useremail" value={contact.email} placeholder="Email" />
   
        <button onClick= {handleClick} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
