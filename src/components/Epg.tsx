import React, { useState, useEffect } from "react";

import Layout from "./Layout";
import Schedule from "./Schedule";

function Epg() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getEpg();
  }, []);

  async function getEpg() {
    try {
      const response = await fetch(`${"http://localhost:1337"}/epg`);
      const data = await response.json();
      setChannels(data.channels);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full bg-gray-900 text-white h-full">
      <img src="/NM_logo_dark.png" className="w-48"></img>
      <Layout>
        <Schedule channels={channels}></Schedule>
      </Layout>
    </div>
  );
}

export default Epg;
