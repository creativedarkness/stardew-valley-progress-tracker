import React, { useState, useEffect } from 'react'
import produce from 'immer'
import { ProgressBar } from '@components/Layout'
import { CraftsRoomView } from '@/views'
import './index.scss'

const App = () => {
  const [communityCenterState, setCommunityCenterState] = useState([])
  const [communityCenterProgress, setCommunityCenterProgress] = useState(0)
  const [perfectionState, setPerfectionState] = useState([])
  const [perfectionProgress, setPerfectionProgress] = useState(0)
  const [grandpasEvaluationState, setGrandpasEvaluationState] = useState([])
  const [grandpasEvaluationProgress, setGrandpasEvaluationProgress] = useState(0)

  useEffect(() => {
    setCommunityCenterProgress(Math.floor(((communityCenterState.length) / 50) * 100))
    setPerfectionProgress(Math.floor(((perfectionState.length) / 24) * 100))
    setGrandpasEvaluationProgress(Math.floor(((grandpasEvaluationState.length) / 24) * 100))
  }, [communityCenterState, perfectionState, grandpasEvaluationState])

  const handleCommunityCenterStateChange = (value) => {
    const nextState = produce(communityCenterState, draft => {
      draft.push(value)
    })
    setCommunityCenterState(nextState)
  }
  
  return (
    <div className='container'>
      <h1>Stardew Valley Progress Tracker</h1>
      <main>
        <section>
          <span className='section-title'>Community Center</span>
          <div className='progress'>
          <ProgressBar progress={communityCenterProgress} />
          <CraftsRoomView updateProgress={(event) => handleCommunityCenterStateChange(event.target.value)} />
          </div>
        </section>
        <section>
          <span className='section-title'>Perfection</span>
          <div className='progress'>
            <ProgressBar progress={perfectionProgress} />
          </div>
        </section>
        <section>
          <span className='section-title'>Grandpa's Evaluation</span>
          <div className='progress'>
            <ProgressBar progress={grandpasEvaluationProgress} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App