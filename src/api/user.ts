import {useQuery} from "react-query";
import axios from "axios";

export type User = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  join_date: string;
  description: string;
};

const QUERY_KEY = ["Users"];

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    `https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users`
  );
  return response.data.data.users;
};

export const useGetUsers = () => {
  return useQuery<User[], Error>(QUERY_KEY, fetchUsers);
};
