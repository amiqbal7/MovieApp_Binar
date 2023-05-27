import React, { useState, useEffect } from "react";
import axios from "axios";

function Update() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get("http://localhost:4000/update/:id")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUserSelection = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedUser) {
      const updatedData = {
        id: selectedUser.id,
        name: name,
        email: email,
        password: password,
      };

      axios
        .put(`http://localhost:4000/update/${selectedUser.id}`, updatedData)
        .then((response) => {
          console.log(response.data);
          fetchUserData();
          setSelectedUser(null);
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="container mx-auto text-white">
      <h2 className="text-2xl font-bold my-4">Update User Data</h2>
      <div className="flex my-4">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">User List:</h3>
          <ul>
            {userData.map((user) => (
              <li
                key={user.id}
                onClick={() => handleUserSelection(user)}
                className={`cursor-pointer ${
                  user === selectedUser ? "font-bold" : ""
                }`}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">Update User:</h3>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border rounded p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border rounded p-2 w-full text-black"
              />
            </label>
            <label className="block mb-2">
              Password:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="border rounded p-2 w-full text-black"
              />
            </label>
            <button
              type="submit"
              disabled={!selectedUser}
              className={`bg-blue-500 py-2 px-4 rounded text-black ${
                !selectedUser ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
