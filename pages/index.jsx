// main index file

import {Flex, Box} from "@chakra-ui/react";

import {baseURL, fetchAPI} from "../utils/fetchAPI";

import Cat from "../components/Cat.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({fetchedCats}) => {
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

      <Flex flexWrap="wrap">
        {/* mapping over the fetched cats list  */}
        {fetchedCats.map((cat) => (
          <Cat cat={cat} key={cat.id} />
        ))}
      </Flex>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // fetching cats from API which are having breeds category
  const fetchedCats = await fetchAPI(
    `${baseURL}/images/search?limit=10&has_breeds=1`
  );

  return {
    props: {
      // fetchedCats: fetchedCat?.hits,
      fetchedCats,
    },
  };
}
