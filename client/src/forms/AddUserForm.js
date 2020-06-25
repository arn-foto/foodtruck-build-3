import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", date: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.date) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Date</label>
      <input
        type="text"
        name="date"
        value={user.date}
        onChange={handleInputChange}
      />
      <button>Add new item</button>
    </form>
  );
};

export default AddUserForm;
