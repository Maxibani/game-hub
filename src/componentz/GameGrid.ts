// import React ,{useEffect, useState} from 'react';
// import apiClient from '../services/api-client';

// interface Game{
//     id: number;
//     name:string;
// }
// interface FetchGamesResopnse{
//     conut:number;
//     results:[];
// }

// const GameGrid = () => {
//     const [games , setGames] = useState<Game[]>([]);
//     const [error , setError] = useState('');

//     useEffect(() => {
//         apiClient.get<FetchGamesResopnse>('/games')
        
//         .then(res => 
//             setGames(res.data.results))

//             .catch((err) =>setError(err.message));
    
//   return(
//     <ul>

//     {games.map(game => <li key ={game.id}>{game.name}</li>)}

//     </ul>

//   )
// }

// export default GameGrid