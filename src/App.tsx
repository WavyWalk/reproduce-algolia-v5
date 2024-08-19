import {Configure} from "react-instantsearch";
import {SearchClient} from "algoliasearch";

function App() {
  // this rule fails here @typescript-eslint/no-redundant-type-constituents
  const foo: SearchClient | null = null
  // this rule fails here @typescript-eslint/no-unsafe-assignmen
  const bar = foo

  console.log(bar)

  return (
    <>
      <Configure
        // types for this properties are not defined
        hitsPerPage={3}
        analyticsTags={['suggestions']}
      />
    </>
  )

}

export default App
