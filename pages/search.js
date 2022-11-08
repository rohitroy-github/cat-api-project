// code to search and fetch cats

import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {Flex, Box, Text, Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs";

import Cat from "../components/Cat";
import SearchFilters from "../components/SearchFilters";
import {baseUrl, fetchApi} from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

const Search = ({cats}) => {
  // to handle search filter changes
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        // bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        fontFamily="Montserrat"
      >
        <Text>Search Cats By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Cats {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {cats.map((cat) => (
          <Cat cat={cat} key={cat.id} />
        ))}
      </Flex>
      {cats.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Text fontSize="xl" marginTop="3">
            No Cats Found ! Try Changing the Filters !
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({query}) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(`${baseUrl}/images/search?breed_ids=${breed.id}`);

  return {
    props: {
      cats: data?.hits,
    },
  };
}

export default Search;
