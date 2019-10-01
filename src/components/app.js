import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageList from './imageList';

class App extends React.Component  {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 687791456a7d97455f826b89644fade3a91b21b882804a5e5c6c97627156bf94'
            }
        })

        this.setState({ images: response.data.results })
        console.log(response);
    }


    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length} images</span>
                <ImageList foundImages={this.state.images} />            
            </div>
        )
    }

}

export default App;