import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  raichu: any;
}

const Pokemon: NextPage<Props> = ({ raichu }) => {
  return (
    <div>
      <Head>
        <title>{raichu.name}</title>
      </Head>
      <h1>{raichu.name}</h1>
    </div>
  );
};

export default Pokemon;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/raichu");
  const dataToJson = await data.json();

  return {
    props: {
      raichu: dataToJson,
    },
  };
};
