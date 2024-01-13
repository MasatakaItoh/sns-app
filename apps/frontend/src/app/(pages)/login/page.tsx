import { Login } from "@components/elements";

const LoginPage = () => {
  return (
    <div className={"flex justify-center items-center h-[100vh]"}>
      <div className={"max-w-[480px] w-full"}>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
