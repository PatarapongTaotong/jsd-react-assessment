<!-- Deployment -->
<!-- http://spotify-create-album-app.surge.sh/ -->

# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br/>

In this project, I have built a React web application called Jammming. I used my knowledge of React components, hook and requests with the Spotify API and built a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

# Installation

    npm install

# How to run
    npm start

Or open [http://spotify-create-album-app.surge.sh/](http://spotify-create-album-app.surge.sh/) to view it in your browser.

# Features
Below is a list of the website's features:
<ul>
  <li>
    Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account.
  </li>
  <li>
    Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library (find Spotify endpoints here).
  </li>
  <li>
    Populate Results List — Jammming displays the list of returned tracks from the user's query.
  </li>
  <li>
    Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
  </li>
  <li>
    Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
  </li>
  <li>
    Change Playlist Title — users can change the title of their custom playlist.
  </li>
  <li>
    Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.
  </li>
</ul>
