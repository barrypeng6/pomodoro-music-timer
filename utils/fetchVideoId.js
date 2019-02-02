import getConfig from 'next/config';

const {
  publicRuntimeConfig: { YT_API_KEY },
} = getConfig();

export default async (songs) => {
  let count = 0;
  let videoId;
  while (videoId == null) {
    const searchStr = `${songs[count].name.replace(/\s+/g, '+')}+${songs[
      count
    ].artist.replace(/\s+/g, '+')}`;
    // eslint-disable-next-line no-await-in-loop
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=${encodeURIComponent(
        searchStr,
      )}&type=video&key=${YT_API_KEY}`,
    );
    // eslint-disable-next-line no-await-in-loop
    const data = await res.json();
    // eslint-disable-next-line prefer-destructuring
    if (data.items.length > 0) videoId = data.items[0].id.videoId;

    count = count + 1;
  }
  return videoId;
};
