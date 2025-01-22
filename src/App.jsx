import React from 'react';
import { DappProvider } from "@multiversx/sdk-dapp/wrappers/DappProvider";
import { TransactionsToastList } from "@multiversx/sdk-dapp/UI/TransactionsToastList";
import { SignTransactionsModals } from "@multiversx/sdk-dapp/UI/SignTransactionsModals";
import { NotificationModal } from "@multiversx/sdk-dapp/UI/NotificationModal";
import { AuthenticatedRoutesWrapper } from "@multiversx/sdk-dapp/wrappers/AuthenticatedRoutesWrapper";
import { Routes } from './routes';
import { Navigation } from './components/Navigation';
import './App.css';

function App() {
  return (
    <DappProvider environment="devnet">
      <Navigation />
      <SignTransactionsModals />
      <NotificationModal />
      <TransactionsToastList />
      <AuthenticatedRoutesWrapper routes={Routes} unlockRoute="/unlock">
        {/* Main App Content */}
      </AuthenticatedRoutesWrapper>
    </DappProvider>
  );
}

export default App; 