import './Playlist.css';
import TrackList from '../TrackList/TrackList';

const Playlist = (props) => {
    // onNameChange event handler
    const handleNameChange = (event) => {
        props.onNameChange(event.target.value);
    }

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange} />
            <TrackList tracks={props.playlistTracks} 
                onRemove={props.onRemove}
                isRemoval={true} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;