import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getHomePage } from '../lib/utils';

export default function Home() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const dataFromServer = await getHomePage();
    setData(dataFromServer.nodeByUri);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/posts">Posts</Link>
      </div>
      {data.title && <h3>{data.title}</h3>}
    </div>
  );
}
