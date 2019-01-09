import { Api } from "@kkbox/kkbox-js-sdk";

const fetchMoodStation = async (api, id) => {
  const { status, data } = await api.moodStationFetcher
    .setMoodStationID(id)
    .fetchMetadata();
  const mood = data.name;
  const image = data.images[0];
  const songs = data.tracks.data.map(track => ({
    name: track.name,
    album: track.album.name,
    artist: track.album.artist.name
  }));
  if (status === 200) return { mood, image, songs };
  return null;
};

export default async (token, id) => {
  const api = new Api(token);
  try {
    const moodStation = await fetchMoodStation(api, id);
    return moodStation;
  } catch (error) {
    localStorage.removeItem("moodStationId");
    const moodStation = await fetchMoodStation(api, 'TZZ4fMCHdJNYqHEf-p');
    return moodStation;
  }
};
