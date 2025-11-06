"use client";

import { useEffect, useState } from "react";

export default function TracksList({ albumId }: { albumId: number }) {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch(`/api/albums/${albumId}/tracks`);
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error ${res.status}`);
        }
        const data = await res.json();
        setTracks(data.tracks || []);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchTracks();
  }, [albumId]);



  if (error) return <p>Erreur: {error}</p>;
  if (!tracks.length) return <p>Pas de morceaux</p>;

  return (
    <ul>
      {tracks.map((t: any) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}
