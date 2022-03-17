import './App.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
  const [searchResults, setSearchResults] = useState([{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, {name: 'name2', artist: 'artist2', album: 'album2', id: 2}]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([{name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 3}, {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 4}]);

  // Add track to a playlist function
  const addTrack = (track) => {
    let tracks = playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks((prev) => [...prev, track]);
  }

  // Remove track from a playlist function
  const removeTrack = (track) => {
    let tracks = playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    setPlaylistTracks(tracks);
  }

  // Change the name of a playlist function
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} 
            onAdd={addTrack} />
          <Playlist playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={updatePlaylistName} />
        </div>
      </div>
    </div>
  );
}

export default App;
