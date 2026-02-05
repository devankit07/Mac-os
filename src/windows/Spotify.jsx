
import Macwindow from './Macwindow'

const Spotify = () => {
  return (
        <Macwindow >
        <div className='spotify-window'>
            <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcXr3xuOkUJZ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindow>    
  )
}

export default Spotify
