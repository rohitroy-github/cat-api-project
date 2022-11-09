import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import {FcMenu, FcHome} from "react-icons/fc";
// import {IoLogoOctocat} from "react-icons/io";
// import {BsSearch} from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <Flex p="5" borderBottom="1px" borderColor="gray.100" paddingTop="0">
    <Link href="/" paddingLeft="2">
      <Box
        textAlign="center"
        justifyContent="center"
        fontFamily="Montserrat"
        fontStyle="sans-serif"
        fontWeight="800"
        fontSize="20px"
        verticalAlign="center"
      >
        Cat-API-Project
      </Box>{" "}
    </Link>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="black.800"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          {/* <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search Cats</MenuItem>
          </Link> */}
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
