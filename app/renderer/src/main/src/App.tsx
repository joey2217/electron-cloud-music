import React, { Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './store'
import Header from './components/Header'
import Player from './components/Player'
import Home from './pages/home'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-auto">
            <Suspense fallback={<div>Loading</div>}>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </Suspense>
          </main>
          <Player />
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App
