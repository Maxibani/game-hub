import { Button, Menu} from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button >
                Order by: Relevance
              <BsChevronDown />
            </Button>
          </Menu.Trigger>
          <Menu.Content>
          <Menu.Item value='Relevance'>Relevance</Menu.Item>
          <Menu.Item value='Date'> Date added</Menu.Item>
          <Menu.Item value='Name'> Name</Menu.Item>
          <Menu.Item value='Release'>Release date</Menu.Item>
          <Menu.Item value='Poroularity'>Porpularity</Menu.Item>
          <Menu.Item value='Average'>Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Root>
      
  )
}

export default SortSelector