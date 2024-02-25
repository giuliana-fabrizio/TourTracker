"use client";

import { useState } from "react";
import { Map, Marker } from "react-map-gl/maplibre";

const mapStyle = {
    version: 8,
    sources: {
        osm: {
            label: "OSM",
            type: "raster",
            tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap Contributors",
            maxzoom: 18,
        },
    },
    layers: [
        {
            id: "bg_layer",
            type: "raster",
            source: "osm",
        },
    ],
    glyphs: "http://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
};

export default function Home() {
    const [viewState, setViewState] = useState({
        longitude: 2.689888499324752,
        latitude: 46.820813531004205,
        zoom: 5.35,
    });

    const coords = [
        { latitude: 46.820813531004205, longitude: 2.689888499324752 },
        { latitude: 43.30776515331166, longitude: 5.364595074246515 },
        { latitude: 43.2958406539998, longitude: 5.480887113706266 },
    ]

    return (
        <Map
            {...viewState}
            onMove={(e) => setViewState(e.viewState)}
            style={{ height: "100vh" }}
            mapStyle={mapStyle}
        >
            {coords.map((coord, index) => (
                <Marker
                    key={index}
                    latitude={coord.latitude}
                    longitude={coord.longitude}
                    style={{ cursor: "pointer" }}
                />
            ))}
        </Map>
    );
}
