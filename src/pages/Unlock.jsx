import React from 'react';
import {
  ExtensionLoginButton,
  WebWalletLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton
} from '@multiversx/sdk-dapp/UI';

export const Unlock = () => {
  const commonProps = {
    callbackRoute: '/dashboard',
    buttonClassName: 'btn btn-primary mx-2'
  };

  return (
    <div className="container my-5 text-center">
      <h1 className="mb-4">Connect Your Wallet</h1>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        <ExtensionLoginButton {...commonProps} loginButtonText="Extension Login" />
        <WebWalletLoginButton {...commonProps} loginButtonText="Web Wallet Login" />
        <LedgerLoginButton {...commonProps} loginButtonText="Ledger Login" />
        <WalletConnectLoginButton {...commonProps} loginButtonText="xPortal Login" />
      </div>
    </div>
  );
}; 