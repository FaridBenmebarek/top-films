import React, { Fragment } from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {
    const {movieList} = props;

    return (
        <Fragment>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack}/>
                    })
                }
            </ul>
        </Fragment>
    );
    function receiveCallBack(movie) {
        props.callback(movie);
    }
};


export default VideoList;
