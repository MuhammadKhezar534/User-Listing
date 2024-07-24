import axios from "axios";
import { UserResponse, User, UserApiParams } from "../types";

const API_URL = "https://randomuser.me/api/";

export const getUsers = async (
  page: number,
  gender?: string,
  search?: string
): Promise<UserResponse> => {
  const params: UserApiParams = {
    page,
    results: 10,
    ...(gender && { gender }),
    ...(search && { name: search }),
  };

  const response = await axios.get<UserResponse>(API_URL, { params });
  return response.data;
};

export const getUserById = async (userId: string): Promise<User | null> => {
  const response = await axios.get<UserResponse>(`${API_URL}?uuid=${userId}`);
  return response.data.results[0] || null;
};
