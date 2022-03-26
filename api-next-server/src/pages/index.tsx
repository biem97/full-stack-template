import { gql } from "apollo-server-micro";
import { useQuery } from "@apollo/client";
import DarkModeToggle from "../components/DarkModeToggle";

const PING = gql`
  query PING {
    ping
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(PING, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>Server: {data.ping}</div>
    </div>
  );
};

export default Home;
