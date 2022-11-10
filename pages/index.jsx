// main index file

import {useState} from "react";

import {Box, Button, Grid, GridItem, Link, Stack} from "@chakra-ui/react";

import {baseURL, fetchAPI} from "../utils/fetchAPI";

import Cat from "../components/Cat.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({fetchedCats}) => {
  // useState for recording changes in fetched data
  const [posts, setPosts] = useState(fetchedCats);

  // function to load 15 more images
  const loadMore = async () => {
    const fetchedCats = await fetchAPI(
      `${baseURL}/images/search?limit=15&has_breeds=1&&_start=15`
    );

    // updating usestate values
    setPosts((value) => [...value, ...fetchedCats]);
  };

  const ASC = "ASC";
  const DESC = "DESC";

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
        Let's Look Up At Some Random Cat Images
      </Box>

      {/* buttons for changing order of image view */}
      <Box
        textAlign="center"
        paddingBottom="5"
        fontFamily="Montserrat"
        fontStyle="sans-serif"
        fontWeight="600"
        fontSize="16px"
      >
        Select order of view according to date uploaded ...
        <Stack
          paddingTop="2"
          direction="row"
          spacing={4}
          align="center"
          justifyContent="center"
          textAlign="center"
        >
          <Link href={`/order/${ASC}`} passHref>
            <Button
              size="sm"
              colorScheme="black"
              variant="outline"
              textAlign="center"
              fontFamily="Montserrat"
              fontStyle="sans-serif"
              // onClick={handleChangeInOrderView("ASC")}
            >
              Ascending
            </Button>
          </Link>

          <Link href={`/order/${DESC}`} passHref>
            <Button
              size="sm"
              colorScheme="black"
              variant="outline"
              textAlign="center"
              fontFamily="Montserrat"
              fontStyle="sans-serif"
            >
              Descending
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
