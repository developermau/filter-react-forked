import { useState } from "react";
import useSongs from "./useSongs";
import { Song } from "./types";

export default function SongList() {
  const { songs } = useSongs();
  const [filter, setFilter] = useState("");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([...songs]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setFilteredSongs(songs);
  };

  const handleFilterClick = () => {
    const lowercasedFilter = filter.toLowerCase();
    console.log({ lowercasedFilter });

    const filteredSongs = songs.filter((song: Song) =>
      song.title.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredSongs(filteredSongs);
    setFilter(""); // Reset the filter input after filtering
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Filter by song name"
          value={filter}
          onChange={handleFilterChange}
        />
        <button type="button" onClick={handleFilterClick}>
          Filter
        </button>
      </form>
      <ul>
        {filteredSongs.map((song: Song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}
