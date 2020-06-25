import React, { useState, Fragment } from "react";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";
import UserTable from "../tables/UserTable";

const TruckCard = () => {
  // Data
  const usersData = [
    { id: 1, name: "Breakfast Burger", date: "Monday special" },
    { id: 2, name: "Tokyo Burger", date: "Tuesday Special" },
    { id: 3, name: "Cowboy Burger", date: "Wednesday special" },
    { id: 4, name: "Vegan Burger", date: "Thursday special" },
    { id: 5, name: "The Triple Burger", date: "Friday special" },
    { id: 6, name: "Califonia Burger", date: "Saturday special" },
    { id: 7, name: "The Jesus Burger", date: "Sunday special" },
  ];

  const initialFormState = { id: null, name: "", date: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, date: user.date });
  };

  return (
    <div className="edit-profile">
      <h2>Welcome back, Bobs Burgers!</h2>

      <h2>Edit your food</h2>
      <div className="edit-menu">
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>

      <div className="form-edit">
        {editing ? (
          <Fragment>
            <h2>Item Edit</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add Some food!</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default TruckCard;
