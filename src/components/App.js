import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect(() => {
        onTermSubmit('cutest puppy');
    }, []);
};

class App extends React.Component {
    
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState( { 
            videos: response.data.items,
            selectedVideo : response.data.items[0]
        });
    };
    
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video });
    };
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />    
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>    
        );
        
    }
}

export default App;