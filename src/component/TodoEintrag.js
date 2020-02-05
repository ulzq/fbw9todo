
import React from 'react';
import { Button } from 'react-bootstrap'

function TodoEintrag({wert,key,loeschen}){ return (
  <tr>
    <td>
      {wert}
    </td>
    <td width="1%">
      <Button onClick={loeschen}>x</Button>
    </td>
  </tr>
)};

export default TodoEintrag;
