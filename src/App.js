import React, { Component } from "react";
import Web3 from "web3";
import Web3Utils from "web3-utils";
import providers from "./providers.json";

// Boostrap loaders
import * as $ from "jquery";
import Popper from "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./Header";

// Initialize boostrap dependencies
window.jQuery = window.$ = $;
window.Popper = Popper;

const web3s = {};

const checkAddress = address =>
  Promise.all(
    Object.keys(web3s).map(network =>
      Promise.all([
        web3s[network].eth.getBalance(address).then(Web3Utils.fromWei),
        web3s[network].eth.getTransactionCount(address),
        web3s[network].eth.getCode(address).then(code => code.length > 2)
      ]).then(([balance, txCount, isContract]) =>
        parseFloat(balance) === 0 && parseFloat(txCount) === 0 && !isContract
          ? null
          : {
              type: "address",
              address,
              network,
              balance,
              txCount,
              isContract
            }
      )
    )
  ).then(results => results.filter(res => res));

const checkTx = txHash =>
  Promise.all(
    Object.keys(web3s).map(network =>
      Promise.all([
        web3s[network].eth.getTransaction(txHash),
        web3s[network].eth.getBlockNumber()
      ]).then(([tx, blockNum]) =>
        tx
          ? {
              type: "tx",
              txHash,
              network,
              blockHeight: tx.blockNumber
                ? blockNum - tx.blockNumber
                : "pending",
              from: tx.from,
              to: tx.to,
              value: tx.value,
              gasPrice: tx.gasPrice,
              gasUsed: tx.gas
            }
          : null
      )
    )
  ).then(results => results.filter(res => res));

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      result: [],
      activeProviders: []
    };
  }

  componentWillMount() {
    // Initialize web3 instances
    Promise.all(
      Object.values(providers).map(provider => {
        const web3 = new Web3(provider.http);
        return web3.eth.net
          .isListening()
          .then(nodeIsOk => {
            if (nodeIsOk) {
              web3s[provider.name] = web3;
              return provider.name;
            }
          })
          .catch(console.error);
      })
    ).then(providerNames => {
      const activeProviders = providerNames.filter(name => name);
      this.setState({ activeProviders });
    });
  }

  onChange(e) {
    let input = e.target.value;
    if (!input || !input.startsWith("0x")) return;

    // ADDRESS is 20 bytes = 40 characters in hex
    // TXHASH is 32 bytes = 64 characters in hex
    if (input.length === 40 + 2 && Web3Utils.isAddress(input)) {
      this.setState({ loading: true });
      checkAddress(input).then(result => {
        this.setState({ result, loading: false });
      });
    } else if (input.length === 64 + 2) {
      this.setState({ loading: true });
      checkTx(input).then(result => {
        this.setState({ result, loading: false });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header activeProviders={this.state.activeProviders} />
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <p className="lead">
            Enter an address, tx hash or token contract from any ethereum chain
          </p>
          <div
            className="input-group mb-3 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter address or Tx hash..."
              onChange={this.onChange.bind(this)}
            />
          </div>
          {this.state.loading ? <h6>Loading...</h6> : null}
          <div>
            {this.state.result.map((res, i) => {
              const { network, type, ...params } = res;
              return (
                <div
                  key={i}
                  className="card mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="card-title">
                      {network} ({type})
                    </h5>
                    {Object.keys(params).map((param, j) => (
                      <p key={j} className="card-text no-bottom">
                        <strong style={{ textTransform: "capitalize" }}>
                          {param}:
                        </strong>{" "}
                        {String(params[param])}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
