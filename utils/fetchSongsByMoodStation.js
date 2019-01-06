import { Api } from "@kkbox/kkbox-js-sdk";

export default async (token, id) => {
  const api = new Api(token);
  const { status, data } = await api.moodStationFetcher.setMoodStationID(id).fetchMetadata();
  const mood = data.name;
  const image = data.images[0];
  const songs = data.tracks.data.map(track => ({
    name: track.name,
    album: track.album.name,
    artist: track.album.artist.name,
  }));
  if (status === 200)
    return { mood, image, songs };
  return null;
};
