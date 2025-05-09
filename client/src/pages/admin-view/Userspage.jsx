import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ userName: "", email: "", password: "", role: "user" });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/get`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };

      if (editingId) {
        await axios.put(`http://localhost:5000/api/users/update/${editingId}`, form, config);
      } else {
        await axios.post(`http://localhost:5000/api/users/create`, form, config);
      }

      setForm({ userName: "", email: "", password: "", role: "user" });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.error("Error saving user:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/delete/${id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err.response?.data || err.message);
    }
  };

  const handleEdit = (user) => {
    setForm({ userName: user.userName, email: user.email, password: "", role: user.role });
    setEditingId(user._id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Username"
            value={form.userName}
            onChange={(e) => setForm({ ...form, userName: e.target.value })}
            required
          />
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required={!editingId}
          />
          <select
            className="border rounded px-3 py-2 w-full"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {editingId ? "Update" : "Add"} User
        </button>
      </form>

      <table className="min-w-full bg-white border rounded shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Username</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Role</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{u.userName}</td>
              <td className="py-2 px-4 border-b">{u.email}</td>
              <td className="py-2 px-4 border-b">{u.role}</td>
              <td className="py-2 px-4 border-b space-x-2">
                <button
                  onClick={() => handleEdit(u)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(u._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
