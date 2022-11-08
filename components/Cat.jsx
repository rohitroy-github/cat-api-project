import Link from "next/link";
import Image from "next/image";
import {Box, Flex, Text} from "@chakra-ui/layout";
import {Avatar} from "@chakra-ui/avatar";
import {FaBed, FaBath} from "react-icons/fa";
import {BsGridFill} from "react-icons/bs";
import {GoVerified} from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/default-cat-iamge.jpg";

const Cat = ({cat: {id, url}}) => (
  <Link href={`/cat/${id}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="10"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image src={url ? url : DefaultImage} width={400} height={260} />
      </Box>
    </Flex>
  </Link>
);

export default Cat;
