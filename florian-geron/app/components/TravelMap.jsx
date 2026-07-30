import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { trips } from "~/data/trips";

export default function TravelMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {trips.map(trip => (
        <Marker
          key={trip.id}
          position={trip.coordinates}
        >
          <Popup>
            <img src={trip.cover} width="200" />
            <h3>{trip.title}</h3>
            <a href={`/trips/${trip.id}`}>
              Read journal
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}