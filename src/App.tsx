import React from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bootstrap from './components/Bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fetch from './components/Fetch'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FunctionalComponent
                    title="NEW TITLE FROM PROPS"
                    subTitle="H3 text"
                  />
                  <FunctionalComponent title="NEW TITLE FROM PROPS" />
                </>
              }
            />
            <Route
              path="/class"
              element={
                <>
                  <ClassComponent
                    title="NEW TITLE FROM PROPS"
                    subTitle="H3 text"
                  />
                  <ClassComponent title="ONE MORE TIME" />
                </>
              }
            />
            <Route path="/form" element={<Bootstrap />} />
            <Route path="/fetch" element={<Fetch />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
