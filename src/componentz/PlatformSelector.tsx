import { Button, Menu } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import type { Platform } from '../hooks/useGames'



interface Props{
  onSelectPlatform:(Platform:Platform) => void;
  selectedPlatform: Platform | null;
}



const PlatformSelector = ({onSelectPlatform, selectedPlatform}:Props) => {

    const {data, error} = usePlatforms();
    if (error)return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          {selectedPlatform?.name || 'Platforms'} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {data.map(platform => (
          <Menu.Item onClick={() => onSelectPlatform(platform)} key={platform.id} value={String(platform.id)}>{platform.name}</Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}

export default PlatformSelector;