
function App() {
  return (
    <main style={{ padding: "1rem 4rem", textAlign: "center", fontSize: "1.3rem"}}>
    <h1 style={{marginBottom: 0}}>Overprofiling</h1>

    <p style={{marginTop: 0}}>Browser extension</p>
    <div style={{textJustify: "inter-word", textAlign: "justify", maxWidth: "1000px", margin: "auto"}}>
    <p>
      The online advertising ecosystem is one of the main funding sources of the internet, allowing users to get access to 
      multiple types of services for free, from Facebook to their favorite newspaper. Most of the ads delivered are based on 
      the user's online behavior (Online Behavioral Advertising). This way to deliver ads brought the capacity to target 
      individuals based on their behavior. The online advertising platforms transform the user's online behavior into "interests".
      However, not all the interests may have a relation to their real online behavior and could 
      be that some of them are artificially added to increase the potential audience of the ad campaigns.</p> 
     
     <p>In this project, we 
     aim to analyze the number the interests associated with your Facebook, Twitter, LinkedIn or Google accounts. Also, we 
     want to measure the level of over profiling (i.e., how many of those interests they assign you but do not represent you ) as well as to 
     measure how frequently Facebook, Twitter, LinkedIn and Google use those interests to deliver ads.  We also want to measure
     whether a user can recognize in which platform an ad was shown and whether or not the ad is useful to the user.
     </p>
     
     <p>
     To this end, we have built a plugin that we ask you to install, which will collect the required data to measure this phenomenon.
     </p>
    </div>
  </main>
  );
}

export default App;
