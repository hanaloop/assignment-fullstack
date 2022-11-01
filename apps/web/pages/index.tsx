import Link from "next/link";
import { useEffect, useState } from "react";

export default function Web() {

  const [serverInfo, setServerInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9080/climatix/info');
      setServerInfo(await response.json());
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-lime-800">Climatix App</h1>
      <pre className="text-xs">{
        JSON.stringify(serverInfo, null, 2)
      }</pre>

      <div>
        <div><Link href="/activities" passHref><a>Activities</a></Link></div>
        <h2>Add Activity</h2>
        <form>
          <input className="border border-r" id="amount" placeholder="amount"></input>
          <input className="border border-r" id="activityDate" placeholder="activityDate"></input>
          <input className="border border-r" id="activityType" placeholder="activityType"></input>
          <button className="p-1 border  border-lime-500">Submit</button>
        </form>
      </div>
    </div>
  );
}
