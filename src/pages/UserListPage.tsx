import React, { useEffect, useState } from "react";
import { Filter, SearchBar, UserList, Pagination } from "../components";
import { getUsers } from "../services/userService";
import { User } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

const UserListPage: React.FC = () => {
  const { gender: genderParam } = useParams<{ gender?: string }>();
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gender, setGender] = useState<string | undefined>(genderParam);
  const [search, setSearch] = useState<string>("");
  const [hasMore, setHasMore] = useState(true);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setGender(genderParam);
  }, [genderParam]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(currentPage, gender, debouncedSearch);
      if (data.results.length > 0) {
        setUsers(data.results);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    };

    fetchUsers();
  }, [currentPage, gender, debouncedSearch]);

  const handleGenderChange = (newGender: string | undefined) => {
    navigate(newGender ? `/${newGender}` : "/");
  };

  const handleNextPage = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="p-4">
      <Filter gender={gender} onGenderChange={handleGenderChange} />
      <SearchBar search={search} onSearchChange={setSearch} />
      <UserList users={users} />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
        isNextDisabled={!hasMore}
        isPreviousDisabled={currentPage === 1}
      />
    </div>
  );
};

export default UserListPage;
