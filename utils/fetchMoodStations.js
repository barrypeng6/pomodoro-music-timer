import { Api } from "@kkbox/kkbox-js-sdk";

export default async token => {
  const api = new Api(token);
  const { status, data } = await api.moodStationFetcher.fetchAllMoodStations();
  if (status === 200)
    return data;
  return null;
};
