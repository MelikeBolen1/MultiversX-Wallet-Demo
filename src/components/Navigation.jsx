import React from 'react';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';

export const Navigation = () => {
  const { address } = useGetAccountInfo();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">MultiversX dApp Demo</a>
        {address && (
          <button 
            className="btn btn-outline-danger"
            onClick={() => logout('/unlock')}
          >
            Disconnect
          </button>
        )}
      </div>
    </nav>
  );
}; 