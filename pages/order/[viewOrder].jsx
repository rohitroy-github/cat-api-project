// changed view order file

import Link from "next/link";

import {useState} from "react";

import {Box, Button, Grid, GridItem, Stack} from "@chakra-ui/react";

import {baseURL, fetchAPI} from "../../utils/fetchAPI";

import Cat from "../../components/Cat";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({fetchedCats, viewOrder}) => {
  // useState for recording changes in fetched data
  const [posts, setPosts] = useState(fetchedCats);

  // function to load 15 more images
  const loadMore = async () => {
    const fetchedCats = await fetchAPI(
      `${baseURL}/images/search?limit=5&order=${viewOrder}&has_breeds=1&&_start=5`
    );

    setPosts((value) => [...value, ...posts]);

    return {
      props: {
        fetchedCats,
      },
    };
  };

  return (
    <>
      <Box
        textAlign="center"
        p="5"
        borderTop="1px"
        borderColor="gray.100"
        fontFamily="Montserrat"
        fontStyle="sans-serif"
        fontWeight="600"
        fontSize="18px"
      >
        Cat Images Arranged in {viewOrder}ENDING Order ...
      </Box>

      <Box
        textAlign="center"
        paddingBottom="5"
        fontFamily="Montserrat"
        fontStyle="sans-serif"
        fontWeight="600"
        fontSize="15px"
      >
        <Stack
          paddingTop="5px"
          direction="row"
          spacing={4}
          align="center"
          justifyContent="center"
          textAlign="center"
        >
          <Link href={"/"}>
            <Button
              size="sm"
              colorScheme="black"
              variant="outline"
              textAlign="center"
              fontFamily="Montserrat"
              fontStyle="sans-serif"
            >
              Back To Random Order
            </Button>
          </Link>
        </Stack>
      </Box>

      <Grid
        h="100%"
        templateColumns="repeat(3, 1fr)"
        gap={10}
        overflow="hidden"
        paddingBottom="5"
      >
        {" "}
        {posts.map((cat) => (
          <GridItem w="100%">
            <Cat cat={cat} key={cat.id} />
          </GridItem>
        ))}
      </Grid>
      <Box textAlign="center" paddingBottom="5">
        <Button
          colorScheme="black"
          variant="outline"
          textAlign="center"
          onClick={loadMore}
          fontFamily="Montserrat"
          fontStyle="sans-serif"
        >
          Load More
        </Button>{" "}
      </Box>
    </>
  );
};

export default Home;

export async function getServerSideProps({params: {viewOrder}}) {
  console.log(
    `${baseURL}/images/search?limit=5&order=${viewOrder}&has_breeds=1`
  );
  const fetchedCats = await fetchAPI(
    `${baseURL}/images/search?limit=5&order=${viewOrder}&has_breeds=1`
  );
  return {
    props: {
      fetchedCats,
      viewOrder,
    },
  };
}
