const Subscribe = props => (
  <div className="subscribe">
    <ul className="subscribe__links">
      <li className="subscribe__link subscribe__link--itunes">
        <a
          target="_blank"
          href="https://podcasts.apple.com/us/podcast/bush-league-bushiness/id1470246301"
          rel="noopener noreferrer"
        >
          Apple Podcasts
        </a>
      </li>
      {/*
        <li className="subscribe__link subscribe__link--overcast">
        <a
          target="_blank"
          href="https://overcast.fm/itunes1253186678/taxdiner"
          rel="noopener noreferrer"
        >
          Overcast
        </a>
      </li>
      */}
      {/*}
      <li className="subscribe__link subscribe__link--google">
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnN5bnRheC5mbS9yc3M%3D"
          rel="noopener noreferrer"
        >
          Google Podcast
        </a>
      </li>
    */}
     {/*
      <li className="subscribe__link subscribe__link--stitcher">
        <a
          target="_blank"
          href="https://www.stitcher.com/s?fid=375432&refid=stpr"
          rel="noopener noreferrer"
        >
          Stitcher
        </a>
      </li>
      <li className="subscribe__link subscribe__link--pocketcasts">
        <a target="_blank" href="https://pca.st/NHP0" rel="noopener noreferrer">
          PocketCasts
        </a>
      </li>
      */}
      <li className="subscribe__link subscribe__link--googleplay">
        <a
          target="_blank"
          href="https://play.google.com/music/listen#/ps/Ikbc2avklipye4lzi4rjsof2z5q"
          rel="noopener noreferrer"
        >
          Google Play
        </a>
      </li>
      {/*
      <li className="subscribe__link subscribe__link--spotify">
        <a
          target="_blank"
          href="https://open.spotify.com/show/3WZvOvh6Aff1cymRB6oMTz"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
      </li>
      */}
     
      <li className="subscribe__link subscribe__link--youtube">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCa7SPPcB63H4V5cDAbuPdQA"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </li>
      <li className="subscribe__link subscribe__link--insta">
        <a
          target="_blank"
          href="https://www.instagram.com/bushleaguebusiness/"
          rel="noopener noreferrer"
        >
          @bushleaguebusiness
        </a>
      </li>
      <li className="subscribe__link subscribe__link--rss">
      <a
        target="_blank"
        href="https://s3.us-west-1.wasabisys.com/blb/BLB_Podcast_Feed.xml"
        rel="noopener noreferrer"
      >
        RSS
      </a>
    </li>
    </ul>
  </div>
);

export default Subscribe;