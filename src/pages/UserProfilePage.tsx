import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../services/userService";
import { User } from "../types";

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId?: string }>();
  const [user, setUser] = useState<User | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBmlypihBPF_GjceykZeJtwsSefHa5WbGs",
  });

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        const fetchedUser = await getUserById(userId);
        setUser(fetchedUser);
      };

      fetchUser();
    }
  }, [userId]);

  const getCoordinates = () => {
    const coordinates = {
      lat: 0,
      lng: 0,
    };

    if (user) {
      const { location } = user;
      const latitude = parseFloat(location?.coordinates?.latitude || "0");
      const longitude = parseFloat(location?.coordinates?.longitude || "0");
      coordinates.lat = latitude;
      coordinates.lng = longitude;
    }
    return coordinates;
  };

  const goBack = () => {
    navigate(-1);
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  if (!user) return <div>Fetching...</div>;
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="p-4 w-[800px] m-auto">
      <div
        className="font-bold cursor-pointer"
        onClick={goBack}
      >{`<--- Go Back`}</div>
      <div className="flex flex-col items-center mb-10 gap-2">
        <h1 className="text-2xl font-bold mb-4">{`${user.name.first} ${user.name.last}`}</h1>
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="w-32 h-32 rounded-full mb-4"
        />
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <img
          src={`https://flagcdn.com/48x36/${user.nat.toLowerCase()}.png`}
          alt={user.nat}
        />
      </div>

      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={getCoordinates()}
          zoom={10}
        >
          <Marker position={getCoordinates()} title="User Location" />
        </GoogleMap>
      </div>
    </div>
  );
};

export default UserProfilePage;
