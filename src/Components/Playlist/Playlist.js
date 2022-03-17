import './Playlist.css';
import TrackList from '../TrackList/TrackList';

const Playlist = (props) => {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            <TrackList tracks={props.playlistTracks} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;