import { useEffect, useState } from "react";
import { Song } from "./types"; // Create this file later
import SongsData from "./songs.json";

const useSongs = (): { songs: Song[] } => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    setSongs(SongsData);
  }, []);

  return { songs, setSongs };
};

export default useSongs;
