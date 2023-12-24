import { useRouter } from "next/router";
import styles from "./User.module.scss";
import MainContainer from "../../components/MainContainer/MainContainer";

export default function User({ user }) {
  const router = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User with is {router.query?.id}</h1>
        <div>User name - {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return { props: { user } };
}
