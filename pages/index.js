import A from "../components/A/A";
import MainContainer from "../components/MainContainer/MainContainer";
const Index = () => {
  return (
    <MainContainer keywords={"main page"}>
      <div className="navbar">
        <A href={"/"} text={"Main"} />
        <span> </span>
        <A href={"/users"} text={"Users"} />
      </div>
      <h1>Main page</h1>
    </MainContainer>
  );
};

export default Index;
