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

function useGame(selectedGenre:Genre|null,selectedPlatform:Platform|null){
  return useData<gameResult>('/games',{
    params:{
      genres:selectedGenre?.id,
      platforms:selectedPlatform?.id
    }},
    [selectedGenre?.id,selectedPlatform?.id]);
}

export default useGame;