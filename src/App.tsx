import {Configure, InstantSearch} from "react-instantsearch";
import {SearchClient, algoliasearch} from "algoliasearch";

function App() {
  // this rule fails here @typescript-eslint/no-redundant-type-constituents
  const searchClient: SearchClient = algoliasearch('appId', 'apiKey')

  return (
    <InstantSearch
      indexName="indexName"
      searchClient={searchClient}
    >
      <Configure
        // types for this properties are not defined
        hitsPerPage={3}
        analyticsTags={['suggestions']}
      />
    </InstantSearch>
  )

}

export default App
