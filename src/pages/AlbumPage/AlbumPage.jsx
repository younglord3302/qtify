import React from "react";
import { useParams } from "react-router-dom";

function AlbumPage() {
  const { albumId } = useParams();

  return (
    <div>
      <h1>Album ID: {albumId}</h1>
      {/* Fetch and display album details using albumId */}
    </div>
  );
}

export default AlbumPage;
