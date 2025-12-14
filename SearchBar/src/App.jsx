
// src/App.jsx
import { useState, useMemo } from "react";
import { users as initialUsers } from "./data";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Case-insensitive filter
  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return initialUsers;

    return initialUsers.filter((user) => {
      const name = user.name.toLowerCase();
      const email = user.email.toLowerCase();
      const role = user.role.toLowerCase();

      return (
        name.includes(query) ||
        email.includes(query) ||
        role.includes(query)
      );
    });
  }, [searchTerm]);

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Search Users</h1>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search by name, email, or role..."
      />
      <p style={{ fontSize: 14, marginTop: 8 }}>
        Showing {filteredUsers.length} of {initialUsers.length} users
      </p>
      <UserList users={filteredUsers} />
    </div>
  );
}

