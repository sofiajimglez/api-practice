import { useEffect, useState } from "react";
import fishingZonesService from '../services/fishing-zones';
import ZoneCard from "../components/ZoneCard";

export const Home = () => {
  const [zones, SetZones] = useState([]);

  useEffect(() => {
    async function listZones() {
      try {
        const zonesList = await fishingZonesService.list();
        SetZones(zonesList);
      } catch (error) {
        console.error(error);
      }
    }

    listZones();
  }, [])

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
      {zones?.map(zone => (
        <ZoneCard {...zone} key={zone.id}/>
      ))}
    </div>
  )
}
