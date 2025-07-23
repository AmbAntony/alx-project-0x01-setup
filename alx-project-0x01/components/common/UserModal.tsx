import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name.includes(".")){
            const [section, field] = name.split(".");
            setUser((prevUser) => ({
                ...prevUser,
                [section]: {
                    ...prevUser[section as keyof typeof prevUser],
                    [field]: value,
                },
            }));
        } else {
            setUser((prevUser) => ({...prevUser, [name]: value}));
        }
      };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg overflow-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name" value={user.name} onChange={handleChange} className="input" />
            <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
            <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
            <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
            <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />
          </div>

          <h3 className="text-lg font-semibold mt-4">Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
            <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
            <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="input" />
            <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="input" />
          </div>

          <h3 className="text-lg font-semibold mt-4">Company</h3>
          <div className="grid grid-cols-2 gap-4">
            <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
            <input name="company.catchPhrase" placeholder="Catchphrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />
            <input name="company.bs" placeholder="BS" value={user.company.bs} onChange={handleChange} className="input" />
          </div>

          <div className="flex justify-between mt-6">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-900">Cancel</button>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;