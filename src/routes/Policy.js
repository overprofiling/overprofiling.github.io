import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Policy() {
    return (
      <main style={{ padding: "1rem 4rem", textAlign: "center", fontSize: "1.3rem"}}>
        <h1>Privacy policy</h1>
        <p>Privacy policies for the Overporfiling Project and FDVT: Social Network Data Valuation Tool</p>
        <p></p>
        <div style={{textJustify: "inter-word", textAlign: "justify", maxWidth: "1200px", margin: "auto"}}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h2 style={{margin: 0}}>Overprofiling privacy policy</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h3>Purpose</h3>
      <p>The goal of this research project is willing to understand how accurate are the profiles Big. Tech companies create from users. In particular, we focus on the following companies: Facebook, Twitter, LinkedIn and Google. The way these companies operate is creating a profile for a user based on the activity of this user assigning them demographic information (e.g., gender, age, location, etc,), interests (e.g., soccer, music, Italian food, etc.) and other elements. The referred companies allow advertisers to run ad campaigns targeting specific profiles defined by the advertiser. Our research projects aims to use advance research techniques to quantify how accurate the profiles created by Big. Tech companies are. This will allow us answering questions like: Do BigTech companies assign users an reasonable number of interests or instead they assign a very large number of interests beyond what an actual human being can cope with? The interests assigned are actually relevant for the users or in fact they are not aligned to what users are interested in? etc. </p>
      <p>To run this project we will have to collect the interests the four referred companies assign to users. To this end we have developed a web browser add on that implements this task. The web browser add on will operate only upon the user provide an explicit consent by accepting these terms of use. </p>
      <p>The data collected for this of this research project is limited to research purposes and will not be used for commercial purposes.</p>
      
      <h3>Data collected and Processing</h3>
      <p>The main piece of data we collect are the interests assigned to the users. While our intention is not collecting personal data, we understand that the combination of many interests together may make a user unique in a given platform (e.g., Facebook) and then we have adopted a conservative approach and manage that information as personal data.
This is the main reason why we ask you an explicit consentwhen installing the browser add on.</p>
      <p>Following, we list the information we collect:</p>
      <ul>
        <li><b>Interests:</b> We collect interests associated with your Facebook, Twitter, LinkedIn and Google profiles. We collect this information through the Ad Preference Managers (APMs) of each platform every 30 minutes. These are the links from where we collect the information:</li>
          <p><span>Facebook:</span>  <a href="https://m.facebook.com/ads/preferences/categories/"  rel="noreferrer" target="_blank">https://m.facebook.com/ads/preferences/categories/</a></p>
          <p><span>Twitter:</span> <a href="https://twitter.com/settings/your_twitter_data/twitter_interests"  rel="noreferrer" target="_blank">https://twitter.com/settings/your_twitter_data/twitter_interests</a> </p>
          <p><span>LinkedIn:</span>  <a href="https://www.linkedin.com/psettings/advertising/li-enterprise-product"  rel="noreferrer" target="_blank">https://www.linkedin.com/psettings/advertising/li-enterprise-product</a> </p>
          <p><span>Google:</span> <a href="https://adssettings.google.com/"  rel="noreferrer" target="_blank">https://adssettings.google.com/</a></p>

        <li><b>Demographic estimations:</b> we collect Google Demographic estimations which are in the same site that the interests.</li>

        <li><b>Ads:</b> we collect the Ads delivered to you on Facebook, Twitter, LinkedIn, YouTube and general websites.
          This include: IDs of the ad, post, images and text associated to them, author of the ad and landing page. 
          We also collect the explanations of why you received a specific ad.
          In the case of Google ads, will we also collect the HTML of the ad and in which URL the ad was shown to you. In YouTube, video ads are not collected.</li>

        <li><b>Clicks on ads:</b> the extension will also collect whether you have clicked an ad or visited the landing page of any ad.</li>

        <li><b>Basic demographic questionnaire</b>: if you agree with these terms, we will ask you for demographic data such as your country, age range and gender.</li>

        <li><b>Ads, demographic estimations and interests valuations</b>: we will ask you to rate ads (rated from 1 to 5 points and in which platform do you think the ad comes from), demographic data (whether they are correct) and interests (rated from 1 to 5 points).</li>

          <li><b>Percentage of posts that are ads:</b> we collect the number of posts and ads shown to you in Twitter, LinkedIn and Facebook to get which percentage of posts are ads. We do not collect any other information about non-ad posts.</li>

      </ul>
      <p>The data is accessed by inspecting the HTML of pages you use, analyzing HTTPS request and responses or making HTTPS requests using your browser to the different platforms (Twitter, Linkedin, Facebook, Google)</p>

      <p>The browser add on allows the user to visualise the collected information through the browser add on interface. </p>

      <p>We create a user ID generating a random 128 bit string that is created upon installing the browser add on and accepting these terms of use. This ID and the information collected remain stored on the browser until you remove the extension.</p>
      <p>
      In addition, we also store the collected information in a backend server located at Universidad Carlos III de Madrid (UC3M) premises. This server is protected by advanced security measures provided by the IT services to protect the Universidad Carlos III de Madrid network. In addition, the server is behind a second local firewall. The server cannot only be accessed locally from the UC3M network or the VPN offered by UC3M. The access to the server is limited to the research team participating in the project under credentials protected by user and password. Similarly, the access to the database storing the information is limited to the research team participating in the project and is also protected by user and password credentials.
      </p>
      <p>
      Finally, the information will be stored in the server for the purpose of the research project and will be removed 2 months after the publication of the final research article derived from this project. 
      </p>
          </Typography>
        </AccordionDetails>

        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2 style={{margin: 0}}>FDVT privacy policy</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The spirit of the FDVT is to be a privacy-preserving browser extension that wants to preserve the identity of the users installing it. We refer to this as No-Identification principle
	<br/><br/>

	At the same time the FDVT aims to provide users with an accurate estimation of the revenue they generate for Facebook&trade; out of their activity in this system. This requires to obtain some personal information from FDVT users without violating the no-identification principle.
	<br/><br/>
	The FDVT is a social tool that aims to create awareness among Internet Users of the actual value of their personal online information. The long-term goal is to create informed Internet Users that increase their demand of transparent online services that clearly reveal how they manage personal information and how they create value out of it.
	<br/><br/>
	The FDVT has been designed as a social tool that aims to create awareness in the society. Therefore, the FDVT can be installed at no cost.
	<br/><br/>
	The FDVT is being currently maintained using research funding coming from public and private sources. Therefore, in order to use the FDVT we request the user to grant us permission to store the information listed below and use it for research purposes. This is useful for two purposes. First, it will serve to advance science in the area of online advertising and try to reveal what are the practices of Facebook&trade; to deliver ads to their users. Second, we will be able to attract new research funding that help us to sustain the FDVT in the medium-term.
	<br/><br/>
	We let the FDVT user know that research funding is accessed through highly competitive processes, and thus we cannot guarantee that we will have continuous research funding to maintain the FDVT. This is the reason why in the Terms of Use agreement we ask the user to grant us permission to eventually commercially exploit information collected from the FDVT always attached to the No-Identification principle. This permission will allow us to get access to alternative funding to maintain and improve the FDVT in the long-term
	<br/><br/>
	Therefore, for all the reasons exposed above we inform the user that the FDVT will collect and store in a database the following information that will be used for research purposes and eventually for commercial purposes:
	<br/><br/>
	1. An FDVT ID computed as the hash of the user Facebook&trade; ID:<br/>
		- The hash operation creates a random and non-reversible random string. This operation is known as pseudonymization.
	<br/><br/>
	2. The parameters filled during the registration process:<br/>
		- Location refers to the country where the user is living and it is compulsory because it is the only compulsory parameter that Facebook&trade; requests to configure an audience.<br/>
		- Gender: Male or Female.<br/>
		- Age + Birthday: We ask users to provide us their age. The reason we also need the birthday is because we need to update the age of the user every year in order to create an accurate audience including the actual age of the user.<br/>
		- Relationship Status: Single, In a Relationship, Married and Engage.
	<br/><br/>
	3. Information related to all Facebook&trade; sessions of the FDVT user. In particular we store for each session:<br/>
		- Pseudonymized Facebook&trade; account ID associated to ads.<br/>
		- Initial and final timestamp of the session. This is used to compute the duration of the session.<br/>
		- Auntonomous System from which the user has established the connection.<br/>
		- Currency Facebook&trade; associates to your account.<br/>
		- Number of newsfeed posts (different than ads) printed during the session but not content of them.<br/>
		- Number of friends/pages/groups printed during the session but not content of them.<br/>
		- Facebook&trade; economical estimations (min, median and max values) such as CPC, CPM and CPA.<br/>
		- Facebook&trade; Ad Id for all the ads displayed in the session. This is a unique ID Facebook&trade; assigns to each ad.<br/>
		- URLs associated to each ad displayed during the session. <br/>
		- Timestamp for each ad displayed during the session.<br/>
		- Location of each ad displayed during the session. The location could be either the newsfeed or the right side of the wall.<br/>
		- Timestamp of each ad click happening during the session.<br/>
		- Pseudonymized IP address from which the user has established the connection with the central server.<br/>
		- AS IP from which the user has established the connection with the central server.<br/>
		- Pseudonymized IP city from which the user has established the connection with the central server.<br/>
		- IP country from which the user has established the connection with the central server.<br/>
		- IP region from which the user has established the connection with the central server.<br/>
		- IP timezone from which the user has established the connection with the central server.<br/>
		- Pseudonymized IP zip code from which the user has established the connection with the central server.<br/>
		- Preferences ID associated to the user account.<br/>
		- Timestamp of creation and delete of preferences.<br/>
		- Name, topic, type and description of user preferences.<br/>

          </Typography>
        </AccordionDetails>

        </Accordion>

        </div>
      </main>
    );
  }