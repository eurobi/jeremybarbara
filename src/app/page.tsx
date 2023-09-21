

export default function Home() {
  return (

    <main>
      <div className="main-container-div">
        <div className="header-div">
          <h1 className="header-name" id='header-first-name'>J E R E M Y</h1>
          <h1 className="header-name" id='header-last-name'>B A R B A R A</h1>
        </div>
        <div className="ticker-wrapper">
        <div className="logo-ticker-div">
          <img className="ticker-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/2560px-Business_Insider_Logo.svg.png'></img>
          <img className="ticker-img" src='https://adworld.online/static/media/logo-dark.cce61d4f.svg'></img>
          <img className="ticker-img" src='https://streamys.org/wp-content/uploads/2012/08/Streamy-Awards_Linear.png'></img>
          <img className="ticker-img" id='ticker-img-shorty' src='https://d3f8w85pjd4o8c.cloudfront.net/static/images/assets/logos/Shorty21_Logo_v2_Horiztonal_Awards_Shorty_Black.png'></img>
          <img className="ticker-img" id='ticker-img-flatiron' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/640px-FS_wiki.png'></img>
          <img className="ticker-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/2560px-Business_Insider_Logo.svg.png'></img>
          <img className="ticker-img" src='https://adworld.online/static/media/logo-dark.cce61d4f.svg'></img>
          <img className="ticker-img" src='https://streamys.org/wp-content/uploads/2012/08/Streamy-Awards_Linear.png'></img>
          <img className="ticker-img" id='ticker-img-shorty' src='https://d3f8w85pjd4o8c.cloudfront.net/static/images/assets/logos/Shorty21_Logo_v2_Horiztonal_Awards_Shorty_Black.png'></img>
          <img className="ticker-img" id='ticker-img-flatiron' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/640px-FS_wiki.png'></img>
        </div>
        </div>
        <div className="title-div">
          <div className="title-selection-div" id='selected-title'>
            <div className="title-selection-text-div">
              <h1>INFLUENCER</h1>
              <h1>MARKETER</h1>
            </div>
          </div>
          <div className="title-selection-plus">
              <h1>+</h1>
            </div>
          <div className="title-selection-div">
            <div className="title-selection-text-div">
              <h1>SOFTWARE</h1>
              <h1>ENGINEER</h1>
            </div>
          </div>
        </div>
        <div className="arrow-container-div">
          <div className="title-arrow"></div>
        </div>
        <div className="bio-div">
          <p className="bio-text"><i>
          An experienced marketer who has built award winning Influencer Marketing teams and strategies at multiple early stage companies; working with thousands of creators on high impact direct response and branded campaigns, garnering billions of views accross channels.
          </i></p>
        </div>
        <div className="company-div">
          <div className="section-header-div">
            <h1 className="section-header-text">B R A N D S</h1>
          </div>
          <div className="company-item-div" id='company-item-seatgeek'>
            <div id='seatgeek-logo-div'>
              <img id='seatgeek-logo' src='/Secondary.png'></img>
            </div>
            <div className="company-desc-div">
              <div className="company-desc-item">
                <h1>Ambasadors</h1>
                <h1>3,000+</h1>
              </div>
              <div className="company-desc-item">
                <h1>Ticket Sales</h1>
                <h1>$120M</h1>
              </div>
              <div className="company-desc-item">
                <h1>ROAS</h1>
                <h1>125%</h1>
              </div>
              <div className="company-desc-item">
                <h1>Followers</h1>
                <h1>1M+</h1>
              </div>
            </div>
          </div>
          <div className="company-item-div" id='company-item-current'>
            <div id='current-logo-div'>
              <img id='current-logo' src='/Current_wordmark_white.png'></img>
            </div>
            <div className="company-desc-div">
            <div className="company-desc-item">
            <h1>Views</h1>
                <h1>1B+</h1>
              </div>
              <div className="company-desc-item">
                <h1>Signups</h1>
                <h1>300,000+</h1>
              </div>
              <div className="company-desc-item">
                <h1>Videos</h1>
                <h1>1,200+</h1>
              </div>
              <div className="company-desc-item">
                <h1>Yearly Spend</h1>
                <h1>$15M+</h1>
              </div>
            </div>
          </div>
          <div className="company-item-div" id='company-item-sundays'>
            <div id='sundays-logo-div'>
              <img id='sundays-logo' src='/sundays.webp'></img>
            </div>
            <div className="company-desc-div">
            <div id='company-desc-sundays' className="company-desc-item">
                <h1>Results</h1>
                <h1>Pending . . .</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
