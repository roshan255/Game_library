import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface gameResult {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
  }

function useGame(gameQuery:GameQuery){
  return useData<gameResult>('/games',{
    params:{
      genres:gameQuery.genre?.id,
      platforms:gameQuery.platform?.id
    }},
    [gameQuery]);
}

export default useGame;