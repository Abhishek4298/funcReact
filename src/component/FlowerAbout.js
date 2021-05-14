import SingleProduct from './SingleProduct';

const FlowerAbout = ({ about_page }) => {
  let data
  return (<>
    <div className="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p>
    </div>
    {data = about_page.map((about) => {
      return (
        <div>{about.ab_name}</div>
      )
    })}
    <h2 styles="text-align:center">Our Team</h2>
    <div className="row">
      <div className="column">
        <div className="card">
          <img className="photo" src="https://1.bp.blogspot.com/-Ybb3sd6z49Y/X8iVAuWrpvI/AAAAAAAAV0w/IYrlua9yum4WBerYjdeMaaWUjlZ_ezWPQCLcBGAsYHQ/s1920/Allu%2BArjun.jpg" alt="Dhaval" styles="width:100%" />
          <div className="container">
            <h1>{data[0]}</h1>
            <h2>{data[0].ab_post}</h2>
            <p><button className="button" onClick="">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default FlowerAbout;