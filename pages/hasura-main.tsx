import { useQuery } from "@apollo/client"; // apolloClientでHasuraからデータを取得するためのHooks
import { GET_USERS } from "queries/queries"; // ユーザー情報GETするクエリ
import { GetUsersQuery } from "types/generated/graphql"; // 自動生成された型

const FetchMain = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS);

  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <p>Hasura main page</p>
      {data?.users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </>
  );
};

export default FetchMain;
