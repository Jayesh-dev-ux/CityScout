import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useUrlPosition = () => {
  const params = useParams();
  const [mapLat, setMapLat] = useState(null);
  const [mapLng, setMapLng] = useState(null);

  useEffect(() => {
    if (params.lat && params.lng) {
      setMapLat(parseFloat(params.lat));
      setMapLng(parseFloat(params.lng));
    }
  }, [params]);

  return [mapLat, mapLng];
};

export default useUrlPosition;
