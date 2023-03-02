import React from 'react';
import "./SearchResult.css"
import TrackList from '../TrackList/TrackList';

const SearchResult = ({searchResult}) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks = {searchResult}/>
        </div>
    );
};

export default SearchResult;