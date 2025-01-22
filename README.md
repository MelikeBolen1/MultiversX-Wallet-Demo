# MultiversX Wallet Demo

A React-based demonstration project showcasing MultiversX blockchain wallet integration and basic transaction functionality using the sdk-dapp library.

## Features

- 🔐 Multiple wallet connection options:
  - MultiversX DeFi Wallet (Browser Extension)
  - Web Wallet
  - Ledger Hardware Wallet
  - xPortal Mobile App (WalletConnect)
- 💸 Basic transaction functionality
- 🔒 Protected routes with authentication
- 📱 Responsive UI with Bootstrap
- 🔔 Transaction notifications and modals

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12.16.2 or later)
- npm (v6.14.4 or later)
- A MultiversX wallet (DeFi Wallet, Web Wallet, Ledger, or xPortal)

## Installation

1. Clone the repository:

bash
git clone https://github.com/your-username/multiversx-wallet-demo.git

3. Install dependencies:
   
bash
npm install
:
bash
npm start
src/
├── components/
│ └── Navigation.jsx # Navigation bar component
├── pages/
│ ├── Dashboard.jsx # Protected dashboard page
│ └── Unlock.jsx # Wallet connection page
├── App.jsx # Main application component
├── index.js # Application entry point
└── routes.js # Route configurations


## Usage

1. Launch the application
2. Click on your preferred wallet connection method
3. Authorize the connection in your wallet
4. Once connected, you'll be redirected to the dashboard
5. View your account information and test transaction functionality

## Environment

The application is configured to work with MultiversX's devnet by default. To change the network:

1. Open `src/App.jsx`
2. Modify the `environment` prop in `DappProvider`:
   
jsx
<DappProvider environment="devnet"> // Options: 'devnet', 'testnet', 'mainnet'


## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Dependencies

- [@multiversx/sdk-dapp](https://www.npmjs.com/package/@multiversx/sdk-dapp) - MultiversX SDK for dApp development
- [React](https://reactjs.org/) - Frontend framework
- [React Router](https://reactrouter.com/) - Routing library
- [Bootstrap](https://getbootstrap.com/) - CSS framework

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MultiversX Documentation](https://docs.multiversx.com/)
- [MultiversX SDK Documentation](https://docs.multiversx.com/sdk-and-tools/sdk-dapp/)

## Support

For support and questions, please open an issue in the repository or reach out to the project maintainers.

## Security

This is a demonstration project. Please review the code thoroughly before using in a production environment.
