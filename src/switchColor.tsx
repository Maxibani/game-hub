import { IconButton,HStack, Text } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./components/ui/color-mode";

 function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
    <IconButton
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      variant="outline"
      size="sm"
    >
      {colorMode === "light" ? <LuMoon /> : <LuSun />}
    </IconButton>
    <Text fontSize={"sm"} fontWeight={"medium"}>
      {
        colorMode ==="dark" ? "Dark Mode" : "Light Mode"
      }
    </Text>
    </HStack>
  );
}
export default ColorModeButton;