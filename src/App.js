import React, { useRef, useEffect, useState } from 'react'
import Radar from './Radar'
import StackedBarChart from './StackedBarChart'

function App() {
    return (
        <div className="App">
            <StackedBarChart />
            <Radar />
        </div>
    )
}

export default App
