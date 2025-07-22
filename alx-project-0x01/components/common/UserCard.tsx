import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address, company }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition duration-300 bg-white">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">
        📧 <span className="font-medium">{email}</span>
      </p>
      <p className="text-sm text-gray-600 mb-1">
        📞 <span className="font-medium">{phone}</span>
      </p>
      <p className="text-sm text-gray-600 mb-1">
        🌐 <a href={`http://${website}`} target="_blank" className="underline text-blue-500">{website}</a>
      </p>
      <p className="text-sm text-gray-600 mb-1">
        🏠 {address.street}, {address.city}
      </p>
      <p className="text-sm text-gray-600">
        🏢 <span className="italic">"{company.catchPhrase}"</span> — {company.name}
      </p>
    </div>
  );
};

export default UserCard;
