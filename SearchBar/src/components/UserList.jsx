// src/components/UserList.jsx
export default function UserList({ users }) {
  if (users.length === 0) {
    return <p style={{ marginTop: 16 }}>No users found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #eee",
            marginBottom: 10,
          }}
        >
          <strong>{user.name}</strong>
          <div style={{ fontSize: 14, color: "#555" }}>{user.email}</div>
          <div style={{ fontSize: 12, color: "#888" }}>{user.role}</div>
        </li>
      ))}
    </ul>
  );
}
