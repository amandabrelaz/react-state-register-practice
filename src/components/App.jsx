import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [click, setClick] = useState("");

  function holdChange(event) {
    const { name, value } = event.target;

    //Spread Operator
    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    setClick([contact.fName, contact.lName, contact.email]);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        {" "}
        Hello {click[0]} {click[1]}
      </h1>
      <p>email: {click[2]}</p>

      <form onSubmit={handleClick}>
        <input
          onChange={holdChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={holdChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={holdChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />

        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
