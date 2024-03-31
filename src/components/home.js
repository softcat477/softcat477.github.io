const Home = () => {
    return (
      <div className="home" id="home">
        <img src="ugly-kitty.jpg" alt="Profile" />
        <p className="namestart">
          Wanye Lin <br/>
          Software Engineer
        </p>
        <p className="nameabout">
          I code for music, transcribe music, and make music.
        </p>
        <p class="nameabout">
          Programming, music, and programming for music are three of my greatest passion. I work as a software developer focused on preserving and digitizing medieval music manuscripts. I also contribute to MuseScore (an open-source music notation software) in my free time.
        </p>
        <div className="socialicon">
          <a href="https://github.com/softcat477" target="_blank" rel="noreferrer noopener">
            <img src="https://img.icons8.com/dusk/64/000000/github.png"
          /></a>
          <a href="https://musescore.com/user/34453589" target="_blank" rel="noreferrer noopener"
            ><img src="https://img.icons8.com/dusk/64/000000/musescore.png"
          /></a>
        </div>
      </div>
    )
}

export default Home;