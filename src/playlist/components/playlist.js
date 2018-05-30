import React from 'react';
import './playlist.css'
import Media from './media';


function Playlist(props) {
    // const playlist = props.data.categories[0].playlist
    console.log(props.data)
    return (
        <div className="Playlist">
        
            {
                props.playlist.map((item) => {
                    return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />
                })
            }
        </div>
    )    
}
 export default Playlist
 