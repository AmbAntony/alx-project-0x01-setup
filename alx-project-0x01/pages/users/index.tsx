import Header from "@/components/layout/Header"
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import React, { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [allUsers, setAllUsers] = useState(posts);

    const handleAddUser = (newUser: UserData) => {
        const newId = allUsers.length + 1;
        setAllUsers([{ ...newUser, id: newId }, ...allUsers]);
    };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button onClick={() => setModalOpen(true)}className="bg-green-600 px-4 py-2 rounded-full text-white hover:bg-green-700">
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {allUsers.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;