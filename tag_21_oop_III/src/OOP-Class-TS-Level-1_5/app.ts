//* OOP-Class-TS-Level-1_5

import Song, {SongWithUnknownArtist} from "./classes/Song";

const song1 = new Song("Stefania", "Kalush Orchestra");
song1._durationInSeconds = 220;

const song2 = new Song("Embrace Me", "Okean Elzy");
song2._durationInSeconds = 300;

const unknownArtistSong = new SongWithUnknownArtist("Wild Dances");
unknownArtistSong._durationInSeconds = 240;
unknownArtistSong.setArtist("Ruslana");