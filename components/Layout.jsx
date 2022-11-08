import Head from "next/head";
import {Box} from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Cat-Api-Project</title>
      </Head>
      <Box
        maxWidth="1280px"
        m="auto"
        paddingLeft="50px"
        paddingRight="50px"
        paddingTop="25px"
        paddingBottom="25px"
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
