import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface gameResult {
    id: number;
    name: string;
  }
interface fetchGameResponse {
    count: number;
    results: gameResult[];
  }

function useGame(){
    const [games, setGames] = useState<gameResult[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchGameResponse>("/games",{signal:controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});
    return ()=>controller.abort();
  },[]);
  return {games,error}
}

export default useGame;