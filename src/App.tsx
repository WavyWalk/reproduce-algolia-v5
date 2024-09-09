import {InstantSearch} from "react-instantsearch";
import {SearchClient, algoliasearch} from "algoliasearch";

function App() {
  const searchClient: SearchClient = algoliasearch('appId', 'apiKey')

  return (
    <InstantSearch
      indexName="indexName"
      searchClient={searchClient}
    />
  )

}

export default App
