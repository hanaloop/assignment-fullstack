import { useEffect, useState } from "react";
import { Button } from "ui";

export default function Web() {

  const [serverInfo, setServerInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9080/climatix/info');
      setServerInfo(await response.json());

      // fetch('http://localhost:9080/climatix/info')
      // .then(response => setServerInfo(response.json()));
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Web</h1>
      <pre>{
        JSON.stringify(serverInfo, null, 2)
      }</pre>
    </div>
  );
}
