console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = [] // empty array

console.log(myCollection);

function addToCollection(collection, title, artist, yearPublished) {
console.log("in addToCollection"); // Check if in function
const newAlbumz = {
  title: title,

  artist: artist,

  yearPublished: yearPublished
} //end newAlbumz 
  collection.push(newAlbumz) // push given collection parameters to the newAlbumz object placeholders title, artist, yearPublished

  return newAlbumz;
}

addToCollection(myCollection, "Frances the Mute", "The Mars Volta", "2005" )
addToCollection(myCollection, "Relationship of Command", "At the Drive-in", "2000" )
addToCollection(myCollection, "Porcelain", "Sparta", "2004" )
addToCollection(myCollection, "End Hits", "Fugazi", "1998" )
addToCollection(myCollection, "Bear vs Shark", "Terrorhawk", "2005" )
addToCollection(myCollection, "June of 44", "Four Great Points", "1998" )

console.log(myCollection); // console logged some great post-punk albums!

function showCollection(collection) {
  for (const album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
