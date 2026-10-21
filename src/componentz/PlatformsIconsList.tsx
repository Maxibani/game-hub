
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import type { Platform } from "../hooks/useGames";
import { Icon } from "@chakra-ui/react";
import type { IconType } from 'react-icons';
import { HStack } from '@chakra-ui/react';

interface Props {
    platforms: Platform[];
}
const PlatformsIconsList = ({ platforms }: Props) => {
    const iconMap: Record<string, IconType> = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        linux: FaLinux,
        android: FaAndroid,
        mac: FaApple,
        nintendo: BsNintendoSwitch,
        "nintendo-switch": BsNintendoSwitch,
        web: BsGlobe,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => {
                const PlatformIcon = iconMap[platform.slug];
                return PlatformIcon ? (
                    <Icon key={platform.id} as={PlatformIcon} color="gray.500" />
                ) : null;
            })}
        </HStack>
    );
};

export default PlatformsIconsList