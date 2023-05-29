
import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { useState } from 'react';

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {},
});

function App() {
  const [signMessageResult, setSignMessageResult] = useState('')

  async function enable() {
    const provider = await web3Modal.connectTo('bitkeep');
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const result = await web3.eth.sign('0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0', accounts[0])
    setSignMessageResult(result)
  }
  return (
    <div>
      <header>
        <button onClick={enable} >enableAndSignMessage</button>
        <div>signMessageResult: {signMessageResult}</div>
      </header>
    </div>
  );
}

export default App;
