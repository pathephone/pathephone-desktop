import React from 'react'

const Stage = ({ checked }) => (
  <div className={`stage${checked ? '--checked' : ''}`}>
    <style jsx>{`
.stage,
.stage--checked {
  width: 1.5em;
  height: 1.5em;
  margin: 1em;
  border-radius: 50%;
}
.stage {
  background-color: rgba(10,10,10,0.2);
}
.stage--checked {
  background-color: cyan;
}
    `}</style>
  </div>
)

export default Stage
