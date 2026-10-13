import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./components/ui/color-mode";

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      variant="outline"
      size="sm"
    >
      {colorMode === "light" ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
}