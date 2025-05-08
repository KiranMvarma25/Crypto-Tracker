Crypto Tracker App
A real-time cryptocurrency tracker built using React and Redux Toolkit that simulates live updates for crypto prices, displaying asset information and 7-day price charts.


Setup Instructions
1. Clone the Repository to your local machine - git clone https://github.com/your-username/crypto-tracker-app.git
2. Navigate to the project directory and install the required dependencies - cd Crypto
3. Install Dependencies - npm install
4. Start the Development Server - npm run dev


Tech Stack

Frontend:

React - For building the user interface.

Redux Toolkit - For state management, handling asset data and simulating real-time updates.

CSS - For responsive styling of the app.



Development Tools:

Vite - For fast development setup.



State Management:

Redux Toolkit manages the state of the crypto assets.

The cryptoSlice contains reducers for updating the asset prices and other properties (like market cap, volume) at regular intervals to simulate real-time data.




Component Structure:

App - The main entry point of the application, containing the CryptoTable component.

CryptoTable - A table that displays the assets and their details, including logos, price, percentage changes and 7-day price charts.

CryptoRow - A component responsible for rendering each asset in the table.

Crypto7DChart - A dynamic chart that shows the price changes over 7 days (static).




Mocked Data:

For now, crypto data is mocked within the Redux store and updated at regular intervals using setInterval.


Video Demo: https://drive.google.com/file/d/1mJkDhy5C_Dy2XTINpgG9OyV7ZaWzYWUD/view?usp=sharing

Live Link - https://cryptotracker-assignment.netlify.app/




Features:

1. Real-Time Price Updates - The app simulates real-time updates of crypto prices and other data.

2. Responsive Design - The app is fully responsive and works on all screen sizes.

3. 7D Price Chart - Displays a static or dynamic chart representing the 7-day price movement for each asset.