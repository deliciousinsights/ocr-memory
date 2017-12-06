import React from 'react'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
      <tr>FIXME</tr>
    </tbody>
  </table>
)

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' },
]
