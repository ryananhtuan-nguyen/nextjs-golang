'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type ServerStatus = {
  status: string;
  environment: string;
  version: string;
};

const ServerStatus = () => {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const fetchStatus = async () => {
    try {
      const response = await axios.get('/api/status', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      setStatus(response.data);
    } catch (error) {
      setStatus(null);
      if (error instanceof Error) console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [status]);
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <ul className="flex flex-col gap-4">
        <span className="font-bold mb-10">ServerStatus:</span>
        {status !== null ? (
          <>
            <li>Status: {status.status}</li>
            <li>Environment: {status.environment}</li>
            <li>Version: {status.version}</li>
          </>
        ) : (
          <span className="font-semibold">Server not available</span>
        )}
      </ul>
    </div>
  );
};

export default ServerStatus;
