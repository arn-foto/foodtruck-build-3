import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="edit-table-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          props.updateUser(user.id, user);
        }}
      >
        <label>Add New Item</label>
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
        <button>Update</button>
        <button
          onClick={() => props.setEditing(false)}
          className="update-button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
