
const FlowerAbout = () => {
	return (<>
	<div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 styles="text-align:center">Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">

      <img className="photo" src="https://1.bp.blogspot.com/-Ybb3sd6z49Y/X8iVAuWrpvI/AAAAAAAAV0w/IYrlua9yum4WBerYjdeMaaWUjlZ_ezWPQCLcBGAsYHQ/s1920/Allu%2BArjun.jpg" alt="Dhaval" styles="width:100%" />
      <div className="container">
        <h2>Anish Bhavsar</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button" onClick="">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img className="photo" src="https://i.pinimg.com/originals/30/87/8e/30878ecaaf68f754400fcf360fa134a6.jpg" alt="Dhruval" styles="width:100%" />
      <div className="container">
        <h2>Dhruval Bhavsar</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img className="photo" src="http://cinespot.net/gallery/d/174126-1/Venkatesh+South+Actor+Photos+_3_.jpg" alt="Darshan" styles="width:100%" />
      <div className="container">
        <h2>Darshan Bhavsar</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
	</>);
}

export default FlowerAbout;