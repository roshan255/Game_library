import useData from "./useData";

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

function useGame(){
  return useData<gameResult>('/games')
}

export default useGame;