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
  dropDepth: 0, // We’ll use it to keep track of how many levels deep we are in the drop zone
  inDropZone: false, // We will use this to keep track of whether we’re inside the drop zone or not
  fileList: [], // We’ll use it to keep track of files that have been dropped into the drop zone
}

function App() {
  const reducer = (state, action) => {
    return Object.keys(actions).includes(action.type)
      ? actions[action.type](state, action)
      : state
  }

  const [data, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>React drag-and-drop component</h1>
      <DragAndDrop data={data} dispatch={dispatch} />
      <ul className='dropped-files'>
        {data.fileList
          .sort((a, b) => a.name - b.name)
          .map((f) => (
            <li key={f.name}>{f.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default App
