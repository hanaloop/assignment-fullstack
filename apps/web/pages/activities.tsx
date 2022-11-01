import Link from "next/link";
import { useEffect, useState } from "react";

export default function Activities() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('http://localhost:9080/climatix/activities');
      // setServerInfo(await response.json());
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-lime-800">Climatix App: Activities</h1>
      <div>
        Date filter: <input className="border border-r" id="date"></input>
      </div>
      <div>
      <div><Link href="/" passHref><a>Add Activity</a></Link></div>
        <h2>Activities</h2>
        {
          // activities....
        }
      </div>
    </div>
  );
}
