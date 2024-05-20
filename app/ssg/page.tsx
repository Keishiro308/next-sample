import { NextPage } from "next";
import Head from "next/head";

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
  return (
    <>
      <Head>
        <title>SSG Page</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <h1>SSG Page</h1>
    </>
  );
};

export default SSG;