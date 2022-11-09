import Link from "next/link";
import Image from "next/image";
import {Box, Flex, Text} from "@chakra-ui/layout";
import {Grid, GridItem} from "@chakra-ui/react";

import DefaultImage from "../assets/default-cat-iamge.jpg";

const Cat = ({cat: {id, url}}) => (
  <Link href={`/cat/${id}`} passHref>
    <Flex flexWrap="wrap" w="100%" justifyContent="center" cursor="pointer">
      <Box>
        <Image src={url ? url : DefaultImage} width={500} height={100} />
      </Box>
    </Flex>
  </Link>
);

export default Cat;
