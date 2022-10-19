import { Button } from "@mui/material";
export default function Downloads() {
    return (
        <main style={{ padding: "1rem 4rem", textAlign: "center", fontSize: "1.3rem"}}>
        <h1>Downloads</h1>

        <h3>Chrome and chromium browsers</h3>
        <a style={{color: "white", textDecoration: "none"}}  href="https://chrome.google.com/webstore/detail/overprofiling/mnmnepgfknlklcegefknonnpdaafmgcb">
        <div>

        <img src="chromeWebStore.png" alt="Chrome Web Store"/>
        </div>
        <Button variant="contained">Click here</Button>
        </a>
      </main>
    );
  }