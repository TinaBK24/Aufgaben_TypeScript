class Song {
    private _title: string;
    protected _artist: string;
    public _durationInSeconds: number;

    constructor(title: string, artist: string) {
        this._title = title;
        this._artist = artist;
        this._durationInSeconds = 0;
    }
}

export class SongWithUnknownArtist extends Song {
    constructor(title: string){
        super(title, "Unknown");
    }

    setArtist(name: string){
        this._artist = name;
    }
}

export default Song;