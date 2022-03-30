/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import TopTitle from "../../components/TopTitle";
import SearchSection from "../../components/ElectedDirectoryFilter";
import ElectedDirectory from "../../components/ElectedDirectory";
import UpcommingElections from "../../components/UpcommingElections";
import ElectedRepresentatives from "../../components/ElectedRepresentatives";
import OtherOfficials from "../../components/OtherOfficials";
import DiscoverByState from "../../components/DiscoverByState";

export default function index() {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          referrerpolicy="no-referrer"
        />
      </Head>
      <Layout>
        <TopTitle />
        <UpcommingElections state={"New York"} />
        <SearchSection />
        <ElectedRepresentatives />
        <OtherOfficials />
        <ElectedDirectory />
        <DiscoverByState />
      </Layout>
    </>
  );
}