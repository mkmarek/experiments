import React from 'react';
import ReactDom from 'react-dom';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";


const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const ExchangeRates = ({ loading, error, data }) => 
  <div>
    {error && <p>Error :(</p>}
    {loading && <p>Loading...</p>}
    {data && data.rates && data.rates.map(({ currency, rate }) =>
      <div key={currency}>
        <p>{currency}: {rate}</p>
      </div>)}
  </div>

const GET_RATES = gql`
{
  rates(currency: "NOK") {
    currency
    rate
  }
}
`;

const ExchangeRatesWithData = () => (
    <Query query={GET_RATES}>
      {ExchangeRates}
    </Query>
  );

const App = () => (
  <ApolloProvider client={client}>
    <ExchangeRatesWithData />
  </ApolloProvider>
);


ReactDom.render(<App />, document.getElementById('app'))