import * as React from 'react'
import './App.css'
import DragAndDrop from './dnd/DragAndDrop'

const actions = {
  SET_DROP_DEPTH: (state, action) => ({
    ...state,
    dropDepth: action.dropDepth,
  }),
  SET_IN_DROP_ZONE: (state, action) => ({
    ...state,
    inDropZone: action.inDropZone,
  }),
  ADD_FILE_TO_LIST: (state, action) => ({
    ...state,
    fileList: state.fileList.concat(action.files),
  }),
}

const initialState = {
  dropDepth: 0,
  inDropZone: false,
  fileList: [],
}

function App() {
  const reducer = (state, action) => {
    return Object.keys(actions).includes(action.type)
      ? actions[action](state, action)
      : state
  }

  const [data, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>React drag-and-drop component</h1>
      <DragAndDrop data={data} dispatch={dispatch} />
    </div>
  )
}

export default App
