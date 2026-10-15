const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const tracks = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      tracks.push({
        ...playlists[i][j],
        source: [i, j]
      });
    }
  }

  return tracks;
}

function scoreTracks(tracks) {
  const scoredTracks = [];

  for (const track of tracks) {
    const score = track.votes * 10 - Math.abs(track.bpm - 120);

    scoredTracks.push({
      ...track,
      score: score
    });
  }

  return scoredTracks;
}

function dedupeTracks(tracks) {
  const uniqueTracks = [];
  const seenTrackIds = [];

  for (const track of tracks) {
    if (!seenTrackIds.includes(track.trackId)) {
      uniqueTracks.push(track);
      seenTrackIds.push(track.trackId);
    }
  }

  return uniqueTracks;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const filteredTracks = [];
  const artistCounts = {};

  for (const track of tracks) {
    if (!artistCounts[track.artist]) {
      artistCounts[track.artist] = 0;
    }

    if (artistCounts[track.artist] < maxPerArtist) {
      filteredTracks.push(track);
      artistCounts[track.artist]++;
    }
  }

  return filteredTracks;
}

function buildSchedule(tracks) {
  const schedule = [];

  for (let i = 0; i < tracks.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });
  }

  return schedule;
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);

  return buildSchedule(quotaEnforced);
}

/*
1. flattenPlaylists()
Combines all playlists into one array. The spread operator (...) copies each track's properties, while source: [i, j] records the original playlist and track indexes.

2. scoreTracks()
Calculates each track's score using:
votes * 10 - Math.abs(bpm - 120)
For example, trk101 gets 5 * 10 - |122 - 120| = 48. The function adds the score without changing the original track.

3. dedupeTracks()
Uses seenTrackIds to keep only the first occurrence of each trackId. Repeated IDs are skipped.

4. enforceArtistQuota()
Tracks how many songs each artist has contributed. Once an artist reaches the maximum allowed count, their later tracks are skipped.

5. buildSchedule()
Creates a new array containing only slot and trackId. Slots start at 1, so the first track gets slot 1, the second gets slot 2, and so on.

Important detail: Although scoreTracks() calculates scores, the lab does not ask you to sort tracks by score. The tracks stay in their original flattened order, and the artist quota keeps the earliest eligible tracks. That is why trk202 is removed when the quota is 1, even though it has a higher score than trk101.
*/