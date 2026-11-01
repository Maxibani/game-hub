import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchInput from "./SearchInput";

interface Props{
  onSearch: (searchText:string) =>void;

}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding= "10px" width="100%" >
      
        <Image src={logo} boxSize="50px" alt="Game Hub logo" />
        <SearchInput onSearch={onSearch}/>
        
      

      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;