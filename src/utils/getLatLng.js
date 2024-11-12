// src/utils/getLatLng.js
export const getLatLng = async (location) => {
    const response = await fetch(`https://api.locationiq.com/v1/search.php?key=pk.e0aee431cb84c87b8468738d43c5ce87&q=${location}&format=json`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates');
    }
  
    const data = await response.json();
    return {
      lat: data[0].lat,
      lng: data[0].lon,
    };
  };
  