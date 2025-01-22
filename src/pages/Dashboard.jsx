import React from 'react';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks';
import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { Address } from '@multiversx/sdk-core/out';

export const Dashboard = () => {
  const { address, account } = useGetAccountInfo();

  const sendTransaction = async () => {
    const transaction = {
      value: '1000000000000000000', // 1 EGLD
      data: 'ping',
      receiver: new Address('erd1...'), // Replace with actual address
      gasLimit: 50000
    };

    await sendTransactions({
      transactions: [transaction],
      transactionsDisplayInfo: {
        processingMessage: 'Processing transaction',
        errorMessage: 'An error occurred',
        successMessage: 'Transaction successful'
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className="container my-5">
      <h1>Dashboard</h1>
      <div className="card p-4 mt-4">
        <h3>Account Info</h3>
        <p>Address: {address}</p>
        <p>Balance: {account.balance}</p>
        <button 
          className="btn btn-primary"
          onClick={sendTransaction}
        >
          Send Test Transaction
        </button>
      </div>
    </div>
  );
}; 