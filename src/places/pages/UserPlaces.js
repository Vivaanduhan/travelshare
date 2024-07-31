import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "TAJ MAHAL",
        description: "One of the most iconic symbols of love and architectural marvels in the world",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        address: " Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        location: {
            lat: 27.1751388,
            lng: 78.0009426 
        },
        creator: "u1"
          
    }, 

    {
        id: "p2",
        title: "TAJ MAHAL",
        description: "One of the most iconic symbols of love and architectural marvels in the world",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        address: " Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        location: {
            lat: 27.1751388,
            lng: 78.0009426 
        },
          creator: "u2"
    }

];
 
const UserPlaces = () => {
    const userId = useParams().userId

    const loadedPlaces = DUMMY_PLACES.filter(place=> place.creator === userId)
    return (<div>
        <PlaceList items={loadedPlaces} />
    </div>);

};

export default UserPlaces;