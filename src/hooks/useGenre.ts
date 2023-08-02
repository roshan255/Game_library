import useData from "./useData";

interface Genre{
    id:number;
    name:string;
    image_background:string;
}

function useGenre(){
  return useData<Genre>('/genres');
}

export default useGenre;