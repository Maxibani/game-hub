

import {type Game } from '../hooks/useGames';
import { Card, HStack } from  "@chakra-ui/react"

import  { CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformsIconsList from './PlatformsIconsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../Services/image-url';
import Emojie from './Emojie';

interface Props{
  game: Game
}

const GameCard = ({game}:Props) => {
  return (
    

  <Card.Root >

    <Image src={getCroppedImageUrl (game.background_image)} />

      <CardBody>
<Heading fontSize= "2xl">{game.name} <Emojie rating={game.rating_top}/></Heading>
<HStack justifyContent ='space-between'>
  <PlatformsIconsList platforms = {game.parent_platforms.map(p => p.platform)} />

  <CriticScore score ={game.metacritic} />

</HStack>
      </CardBody>
  </Card.Root>


    
  )
}

export default GameCard

