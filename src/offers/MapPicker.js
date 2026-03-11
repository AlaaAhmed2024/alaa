import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const defaultCenter = {
  lat: 25.2048,
  lng: 55.2708
};

const MapPicker = () => {
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [lat, setLat] = useState(defaultCenter.lat);
  const [lng, setLng] = useState(defaultCenter.lng);
  const [address, setAddress] = useState('');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDbFmee4Ekf2xdYwYuURhRtajirhgIXtuk', // 🔁 استبدل هذا بمفتاحك
    libraries: ['places']
  });



  const reverseGeocode = (lat, lng) => {
    if (!window.google || !window.google.maps) return;
  
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress("لم يتم العثور على عنوان");
        }
      } else {
        console.error("فشل في جلب العنوان بسبب:", status);
        setAddress("خطأ في جلب العنوان");
      }
    });
  };











  const [mapType, setMapType] = useState('roadmap'); // أو 'satellite'

  const [coords, setCoords] = useState(`${defaultCenter.lat}, ${defaultCenter.lng}`);

  const onMapClick = useCallback((e) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();
    const newPos = { lat: newLat, lng: newLng };
    setMarkerPosition(newPos);
    setLat(newLat.toFixed(6));
    setLng(newLng.toFixed(6));
    reverseGeocode(newLat, newLng);
    setCoords(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
  }, []);


  
 


  const goToCoordinates = () => {
    const [latStr, lngStr] = coords.split(',').map(val => val.trim());
    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);
  
    if (!isNaN(lat) && !isNaN(lng)) {
      const newPos = { lat, lng };
      setMarkerPosition(newPos);
      reverseGeocode(lat, lng);
    } else {
      alert("من فضلك أدخل الإحداثيات بشكل صحيح، مثال: 25.276987, 55.296249");
    }
  };

  if (!isLoaded) return <div>تحميل الخريطة...</div>;

  return (
    <div>
      <h2>خريطة تفاعلية مع عنوان مباشر من الإحداثيات 🌍</h2>
      <div style={{ marginBottom: 10 }}>
      <input
  type="text"
  value={coords}
  onChange={(e) => setCoords(e.target.value)}
  placeholder="مثال: 25.276987, 55.296249"
/>

        <button onClick={goToCoordinates}>اذهب للموقع</button>
        <div style={{ marginBottom: 10 }}>
  <select onChange={(e) => setMapType(e.target.value)} value={mapType}>
    <option value="roadmap">🗺️ عادي</option>
    <option value="satellite">🛰️ قمر صناعي</option>
    <option value="hybrid">🛰️ + شوارع (Hybrid)</option>
    <option value="terrain">🏔️ تضاريس</option>
  </select>
</div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={14}
        onClick={onMapClick}
        mapTypeId={mapType} // هنا السر
      >
        <Marker position={markerPosition} />
      </GoogleMap>
      <div style={{ marginTop: 10 }}>
        <strong>📍 العنوان:</strong> {address || "اختر نقطة لعرض العنوان"}
      </div>
    </div>
  );
};

export default MapPicker;
