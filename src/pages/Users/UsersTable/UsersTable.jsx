import { useGetUsersQuery } from "../../../features/api/usersSlice";

const UsersTable = () => {
  // const { data } = useGetUsersQuery();
  // console.log(useGetUsersQuery())
  // console.log(data);
  const { data: userData, error, isLoading } = useGetUsersQuery({ page: 3 });
  console.log(userData);
  return <div>UserTable</div>;
};

export default UsersTable;
