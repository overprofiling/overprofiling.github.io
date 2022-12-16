
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';


export default function Tutorial() {
  return (
    <main style={{ padding: "1rem 5rem", textAlign: "left", fontSize: "1.05rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "1.3rem" }}>Instructions</h1>
      <p style={{ textAlign: "center", fontSize: "1.3rem" }}>Instructions to complete the survey</p>
      <p></p>


      <div className="panel panel-success">
        <Divider><h2>Task Information:</h2></Divider>
        <p>In this task, we will ask you to browse social media platforms with an installed extension, and then classify Ad Interests and Ads.
        </p>
        <div className="panel-body">
          <b>Task Requirements:</b>
          <ul>
            <li>1) Your desktop browser needs to be <span><b>Chrome</b></span><span><b>.</b></span></li>
            <li>2) <strong>All </strong>sections must be completed</li>
            <li>3) Be logged in to your <b>Google</b> account in your browser.</li>
            <li>4) Have an account and be logged in, to at least two of the following platforms: Facebook, Twitter, LinkedIn. </li>
          </ul>

          <p><span><b>Estimated Time: </b>30</span> to 40 minutes
          </p>
          <b>Sections:</b>
          <ul>
            <li>1) Check Ad Settings</li>
            <li>2) Download Chrome Extension</li>
            <li>3) Browse platforms</li>
            <li>4) Classify interests</li>
            <li>5) Classify Ads</li>
            <li>6) Insert Completion Code</li>
          </ul>
          <strong>Chrome Extension description: </strong>This web extension: <u>Overprofiling</u>, collects Ads from Social Networks and interests associated with your accounts on several platforms. We will ask you to install this in your browser, browse several platforms, and collect ads. Then, we will ask you to rate interests and classify ads.
          <br />
          <br />
          The data will only be used for research purposes.
          <br />
          <br />
          <table className="table table-bordered">
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel panel-primary">
        <Divider><h2>1 - Check Ad settings</h2></Divider>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-info">

                <div>
                  <div>Before installing the extension, you should check whether you have logged in and whether you have interests activated in each platform:
                    <br />
                    It's important to check all settings are on, to avoid having issues regarding the collection of data.
                    <br />
                  </div>
                  <Grid container spacing={2} style={{ textAlign: "center" }}>
                    <Grid item xs={6}>
                      <b>Facebook</b>
                      <br />
                      <img alt="" height="250" src="https://eupoliticalbarometer.uc3m.es/overprofiling/AdSettingsFacebook.com.png" />
                      <br />
                      Check with this URL: <a href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noreferrer" style={{ color: "white" }}>https://www.facebook.com/adpreferences/ad_settings</a>
                    </Grid>
                    <Grid item xs={6}>
                      <b>Google</b>
                      <br />
                      <img alt="" height="250" src="https://eupoliticalbarometer.uc3m.es/overprofiling/AdSettingsGoogle.png" width="698" />
                      <br />
                      Check with this URL: <a href="https://myadcenter.google.com" target="_blank" rel="noreferrer" style={{ color: "white" }}>https://myadcenter.google.com</a>
                    </Grid>
                    <Grid item xs={6}>
                      <b>Twitter </b>
                      <br />
                      <img alt="" height="250" src="https://eupoliticalbarometer.uc3m.es/overprofiling/AdSettingsTwitter.png" width="608" />
                      <br />
                      Check with this URL: <a href="https://twitter.com/settings/ads_preferences" target="_blank" rel="noreferrer" style={{ color: "white" }}>https://twitter.com/settings/ads_preferences</a>
                    </Grid>
                    <Grid item xs={6}>
                      <b>LinkedIn</b>
                      <br />
                      <img alt="" height="217" src="https://eupoliticalbarometer.uc3m.es/overprofiling/AdSettingsLinkedIn.png" width="727" />
                      <br />
                      Check with this URL: <a href="https://www.linkedin.com/mypreferences/d/interest-categories" target="_blank" rel="noreferrer" style={{ color: "white" }}>https://www.linkedin.com/mypreferences/d/interest-categories</a>
                    </Grid>
                  </Grid>
                </div>
                <div className="panel panel-info">
                  <Divider><h2>2 - Setup Extension</h2></Divider>
                  <div className="panel-body">
                    <p><span><strong>Step 1:</strong> Visit the Chrome Web Store link of the extension:</span>
                    </p>
                    <strong><a href="https://chrome.google.com/webstore/detail/overprofiling/mnmnepgfknlklcegefknonnpdaafmgcb" target="_blank" rel="noreferrer" style={{ color: "white" }}>Click here</a></strong>
                    <br />
                    <br />
                    <span><b>Step 2: </b>Install the extension:</span>
                    <br />
                    <br />
                    <img className="img-zoom" data-zoomtype="window" height="360" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial1.png" />
                    <br />
                    <br />
                    <br />
                    <img alt="" height="370" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial2.png" />
                    <p>
                      <br />
                      <span><b>Step 3:</b> Once the extension is installed, a tab will open, and you have to verify that you are an adult, then read and accept the terms</span>
                      <br />
                      <br />
                      <img alt="" height="340" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial3.png" width="563" />
                      <br />
                      <br />
                      <strong>Step 4</strong>: Fill out the demographic form and your <b>Prolific ID</b>. It is really important to fill your Prolific ID, as this is needed to receive the Completion Code and to be able to rank the task as complete.
                      <br />
                      <br />
                      <img alt="" height="340" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial4b.png" width="519" />
                      <br />
                      <br />
                      <strong>Step 5:</strong> Pin the extension in the chrome toolbar: click on the Extensions Icon at the right side of the toolbar, and then click on the pushpin icon next to Overprofiling.
                    </p>
                  </div>
                </div>
                <div className="panel panel-info">
                  <Divider><h2>3 - Browse platforms</h2></Divider>
                  <div className="panel-body"><strong>Estimated time:</strong> 10 - 20 minutes
                    <br />
                    Browse your Facebook, Twitter and LinkedIn <strong>feeds </strong>for a few minutes each. You could also visit regular websites that display ads.
                    <br />
                    The extension needs to collect at least <strong><u>60 ads</u></strong>, make sure to collect <u>at least 10 ads from each platform you have an account. </u>
                    <br />
                    <br />
                    <strong>Note:</strong> We advise you to start with Facebook, as the ads from this platform will take more time to collect.
                    <br />
                    <br />
                    You can check the number of ads in the Ads Collected Tab:
                    <br />
                    <br />
                    <img alt="Ads collected tab" height="340" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial5.png" width="554" />
                  </div>
                </div>
                <div className="panel panel-info">
                  <Divider><h2>4 - Classify Interests</h2></Divider>
                  <div className="panel-body"><strong>Estimated time</strong>: 5 - 7.5 minutes
                    <br />
                    Once you have seen at least 60 ads, go to the Interests Tab:
                    <br />
                    <br />
                    <img alt="Interests tab" height="151" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial6.png" width="738" />
                    <br />
                    <br />
                    Check the <strong>demographic data</strong>, and answer Yes or No if they are correct or not.
                    <br />
                    <br />
                    Answer from 1 to 5 starts, whether the interest is relevant to you. Answer at least <u>200 interests</u> or the 100% of interests shown to you in case there are not enough interests.
                    <br />
                    <br />
                    <strong>Note</strong><em><strong>: </strong></em>we will check the time between each item classified, so we can tell if you have automated the process or if you are answering the questions randomly.
                  </div>
                </div>
                <div className="panel panel-info">
                  <Divider><h2>5 - Classify Ads</h2></Divider>
                  <div className="panel-body"><strong>Estimated time</strong>: 5 - 7.5 minutes
                    <br />
                    <br />
                    Go to Classify Ads tab:
                    <br />
                    <br />
                    <img alt="" height="136" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial7.png" width="712" />
                    <br />
                    <br />
                    For each ad, click on the icon of the platform you think the ad was displayed to you, or if you don't remember to see it the "NOT SEEN - DON'T REMEMBER" button.
                    <br />
                    Also, rate the ad from 1 to 5 stars
                    <br />
                    <br />
                    <strong>Classify at least <u>50 ads</u></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="panel panel-success">
          <Divider><h2>6 - Insert Completion Code</h2></Divider>
          <p>
            Once you have completed the three steps, go to the Info tab, and click on "Your Info". If you completed the three steps, you should see the Completion Code, which you should insert in Prolific.
          </p>
          <div>
            <br />
            <img alt="" height="340" src="https://eupoliticalbarometer.uc3m.es/overprofiling/Tutorial8b.png" width="831" />
            <br />

            <u><strong>Important: </strong>Even though the code will only appear after you complete the task, we are going to check whether you have completed all the requirements, as all information is saved on our database.</u>
            <br />
          </div>
        </div>
      </div>




    </main>
  );
}