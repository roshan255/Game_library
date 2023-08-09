import useData from "./useData";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

function usePlatform(){
    return useData<Platform>('/platforms/lists/parents')
}

export default usePlatform;