// src/components/SearchBar.jsx
export default function SearchBar({ value, onChange, placeholder }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "8px 12px",
        fontSize: 16,
        borderRadius: 8,
        border: "1px solid #ccc",
        outline: "none",
      }}
    />
  );
}
