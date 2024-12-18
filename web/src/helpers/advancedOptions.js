export const decimalOptions = [
  {
    label: 'acousticness',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.',
    enabled: false,
    value: 50,
  },
  {
    label: 'danceability',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.',
    enabled: false,
    value: 50,
  },
  {
    label: 'energy',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.',
    enabled: false,
    value: 50,
  },
  {
    label: 'instrumentalness',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.',
    enabled: false,
    value: 50,
  },
  {
    label: 'liveness',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.',
    enabled: false,
    value: 50,
  },
  // {
  //   label: 'loudness',
  //   min: -80,
  //   max: 10,
  //   default: -30,
  //   tooltip: 'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.',
  //   enabled: false,
  //   value: -30,
  // },
  {
    label: 'speechiness',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.',
    enabled: false,
    value: 50,
  },
  {
    label: 'valence',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).',
    enabled: false,
    value: 50,
  }
];

export const intOptions = [
  {
    label: 'popularity',
    min: 0,
    max: 100,
    default: 50,
    tooltip: 'The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.',
    enabled: false,
    value: 50,
  },
];

export const textInputOptions = [
  {
    label: 'tempo',
    min: 0,
    max: 500,
    default: 84,
    tooltip: 'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.',
    enabled: false,
    value: 84,
  },
]