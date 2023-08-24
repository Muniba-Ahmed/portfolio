import Portfolio from "../components/Portfolio";
import Head from "next/head";

const portfolio = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Muniba Ahmed</title>
      </Head>
      <Portfolio />
    </>
  );
};

export default portfolio;
