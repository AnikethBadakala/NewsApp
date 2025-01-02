
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [pageSize, setPageSize] = useState(10)
  const [apikey, setApikey] = useState(process.env.REACT_APP_NEWS_API)
  const [progress, setProgress] = useState(0)
  // pageSize = 10;
  // apikey=process.env.REACT_APP_NEWS_API;


  // state = {
  //   progress: 0
  // }

  const setProgressValue = (p) => {
    setProgress(p)
  }
  
    document.body.style.backgroundColor = "white";
    return (
      <>
        <Router>
          <div>
            <NavBar />
            <LoadingBar
              height={5}
              color='#f11946'
              progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgressValue} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />

              <Route exact path="/business" element={<News setProgress={setProgressValue} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={setProgressValue} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

              <Route exact path="/health" element={<News setProgress={setProgressValue} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
              <Route exact path="/science" element={<News setProgress={setProgressValue} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
              <Route exact path="/sports" element={<News setProgress={setProgressValue} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News setProgress={setProgressValue} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
            </Routes>
          </div>
        </Router>
        {/* <News setProgress={setProgressValue} apikey={apikey}pageSize={pageSize} country="in" category="general" /> */}
      </>
    )
  
}

export default App;
