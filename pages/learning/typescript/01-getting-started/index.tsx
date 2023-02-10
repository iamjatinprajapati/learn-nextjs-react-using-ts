import Link from "next/link";
import { ReactElement } from "react";
import { DefaultLayout } from "../../../../layouts/default";
import { NextPageWithLayout } from "../../../_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-4xl font-bold mb-10">01. Getting Started</div>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;
