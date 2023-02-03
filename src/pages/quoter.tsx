import Banner from "@/atoms/banner/Banner";
import useAuth from "@/hooks/useAuth";
import useWeb3 from "@/hooks/useWeb3";
import AppTemplate from "@/organism/AppTemplate";
import { ReactElement } from "react";

const QuoterPage = () => {
  const { loggedUser } = useAuth();
  const { web3, userInfo } = useWeb3();

  return (
    <>
      <div className="p-16">
        <Banner
          title={"Información Bancaria"}
          message={
            "Para recibir los depositos producto de sus ventas y por temas de validación, es necesario ingresar los datos de la cuenta de donde realizará sus pagos y en donde recibirá los mismos."
          }
        />
      </div>
      <div className="p-24 rounded shadow">
        <div>Yeii! {loggedUser?.email}</div>
        <div>{userInfo && <div>{JSON.stringify(userInfo)}</div>}</div>
      </div>
    </>
  );
};

QuoterPage.getLayout = function getLayout(page: ReactElement) {
  return <AppTemplate>{page}</AppTemplate>;
};

export default QuoterPage;
