import {InstantSearch} from "react-instantsearch";
import {algoliasearch} from "algoliasearch";
import { type SearchClient } from '@algolia/client-search'

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
