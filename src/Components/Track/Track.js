import './Track.css';

const Track = (props) => {
    const renderAction = (props) => {
        if (props.isRemoval) {
            return <button className="Track-action">+-</button>;
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>;
        }
    }

    // Call for 'add track to playlist function'
    const addTrack = () => {
        props.onAdd(props.track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction(props)}
        </div>
    );
}

export default Track;