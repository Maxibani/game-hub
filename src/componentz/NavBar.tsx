import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding= "10px" width="100%" >
      
        <Image src={logo} boxSize="50px" alt="Game Hub logo" />
        <SearchInput/>
        
      

      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;