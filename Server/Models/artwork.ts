import { Collection, Schema, model } from 'mongoose';
//Artwork Interface - defines the structure of a artwork document

interface IArtwork
{
    artworkID: string,
    title: string,
    artist: string,
    medium: string,
    subject: string[],
    yearCreated: number,
    description: string,
    dimensions: number,
    imageURL: string,
    style: string[],
    currentLocation: string,
 
}

//Artwork Schema -defines the structure of a artwork document
let artworkSchema = new Schema<IArtwork>
({
    artworkID: String,
    title:String,
    artist: String,
    medium: String,
    subject: [String],
    yearCreated: Number,
    description: String,
    dimensions: Number,
    imageURL: String,
    style: [String],
    currentLocation: String
});

let Artwork = model<IArtwork>('Artwork', artworkSchema);

export default Artwork;
