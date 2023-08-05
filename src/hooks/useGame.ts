import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface gameResult {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
  }

function useGame(selectedGenre:Genre|null){
  return useData<gameResult>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id])
}

export default useGame;