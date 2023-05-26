import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fishingZonesService from '../services/fishing-zones';

const ZoneDetail = () => {
  const { id } = useParams();

  const [zone, setZone] = useState([]);

  useEffect(() => {
    async function listZone() {
      try {
        const detail = await fishingZonesService.detail(id);
        setZone(detail);
      } catch (error) {
        console.error(error);
      }
    }

    listZone();
  }, [id]);

  return (
    <>
    {zone.map(zone => <p key={zone.id}>{zone.name}</p>)}
    </>
  )
}

export default ZoneDetail;