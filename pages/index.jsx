// main index file

import {useState, useEffect} from "react";

// importing paginition files
import Pagination from "../components/Paginition";
import {paginate} from "../utils/paginate";

import {Flex, Box} from "@chakra-ui/react";
import {Grid, GridItem} from "@chakra-ui/react";

import {baseURL, fetchAPI} from "../utils/fetchAPI";

import Cat from "../components/Cat.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({fetchedCats}) => {
  const [posts, setPosts] = useState([]);
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(posts, currentPage, pageSize);

  // setPosts(fetchedCats);

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
        {fetchedCats.map((cat) => (
          <GridItem w="100%">
            <Cat cat={cat} key={cat.id} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Home;

// export async function getStaticProps() {
//   // fetching cats from API which are having breeds category
//   const fetchedCats = await fetchAPI(
//     `${baseURL}/images/search?limit=10&has_breeds=1`
//   );

//   return {
//     props: {
//       // fetchedCats: fetchedCat?.hits,
//       fetchedCats,
//     },
//   };
// }

export async function getStaticProps() {
  // fetching cats from API which are having breeds category
  const fetchedCats = await fetchAPI(
    `${baseURL}/images/search?limit=15&has_breeds=1`
  );

  return {
    props: {
      // fetchedCats: fetchedCat?.hits,
      fetchedCats,
    },
  };
}

// <Pagination
//   items={posts.length}
//   pageSize={pageSize}
//   currentPage={currentPage}
//   onPageChange={handlePageChange}
// />
