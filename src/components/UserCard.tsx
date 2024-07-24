import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.login.uuid}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex gap-5 border p-4 rounded-lg cursor-pointer hover:bg-gray-100"
    >
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="w-24 h-24 rounded-full mb-2"
      />
      <div className="flex flex-col">
        <h2 className="text-xl">{`${user.name.first} ${user.name.last}`}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
