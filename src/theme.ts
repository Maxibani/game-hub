import { createSystem,  defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig (
    {
        theme:{
            tokens:{
                colors:{
                    brand:{
                        500:{value: " #3182ce"},
                        600:{value: " #2b6cb0"},
                    },
                },
            },
        },
    },
);

const theme =   createSystem(defaultConfig, config);

export default theme;
