import React, { useRef, useEffect, useState } from 'react'
import Radar from './Radar'
import StackedBarChart from './StackedBarChart'
import Doughnut from './Doughnut'

function App() {
    return (
        <div className="App">
            <StackedBarChart />
            <Radar />
            <Doughnut />
        </div>
    )
}

export default App
