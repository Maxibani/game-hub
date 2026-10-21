

import {type Game } from '../hooks/useGames';
import { Card } from  "@chakra-ui/react"

import  { CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformsIconsList from './PlatformsIconsList';

interface Props{
  game: Game
}

const GameCard = ({game}:Props) => {
  return (
    

  <Card.Root borderRadius={10} overflow= "hidden">

        <Image src={game.background_image} />

      <CardBody>
<Heading fontSize= "2xl">{game.name}</Heading>
<PlatformsIconsList platforms = {game.parent_platforms.map(p => p.platform)} />

      </CardBody>
  </Card.Root>


    
  )
}

export default GameCard

