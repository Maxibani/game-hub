import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";

const NavBar = () => {
  return (
    <HStack justify="space-between" width="100%" px={4} py={2}>
      <HStack>
        <Image src={logo} boxSize="50px" alt="Game Hub logo" />
        <Text fontWeight="bold">LoGo</Text>
      </HStack>

      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;