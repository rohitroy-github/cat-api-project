// main index file

import {useState} from "react";

import {Box, Button, Grid, GridItem} from "@chakra-ui/react";

import {baseURL, fetchAPI} from "../utils/fetchAPI";

import Cat from "../components/Cat.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({fetchedCats}) => {
  const [posts, setPosts] = useState(fetchedCats);

  // function to load 15 more images
  const loadMore = async () => {
    const fetchedCats = await fetchAPI(
      `${baseURL}/images/search?limit=15&has_breeds=1&&_start=15`
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
        Let's Look Up At Some Cats
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
        {/* button for loading 15 more images */}
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

export async function getStaticProps() {
  // fetching cats from API which are having breeds category
  const fetchedCats = await fetchAPI(
    `${baseURL}/images/search?limit=15&has_breeds=1`
  );

  return {
    props: {
      fetchedCats,
    },
  };
}
