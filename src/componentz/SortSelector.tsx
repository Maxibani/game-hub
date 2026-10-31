import { Button, Menu} from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSortOrder: ( sortOder: string)=> void
    sortOrder:string;
}
const SortSelector = ({onSelectSortOrder, sortOrder}:Props) => {
    const sortOders =[
       { value: '', label: 'Relevance'},
        { value: '-added', label: 'Date added'},
         { value: 'name', label: 'Name'},
          { value: '-released', label: 'Release date'},
           { value: '-metacritic', label: 'Porpularity'},
            { value: '-rating', label: 'Average rating'},
    ];

    const currentSortOrder = sortOders.find(order => order.value === sortOrder);

  return (
    
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button >
                Order by: {currentSortOrder?.label || 'Relevance'}
              <BsChevronDown />
            </Button>
          </Menu.Trigger>
          <Menu.Content>
         {sortOders.map(order => <Menu.Item key={order.value} value='order.value' onClick={()=> onSelectSortOrder(order.value)}>{order.label} </Menu.Item>)}
          </Menu.Content>
        </Menu.Root>
      
  )
}

export default SortSelector