import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onTermSubmit('cutest puppy');
    }, []);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };
};

export default useVideos;
