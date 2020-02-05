
import React from 'react'
import { Table } from 'react-bootstrap'

import TodoEintrag from './TodoEintrag'

function TodoListe({todo,loeschen}){
  return (
    <Table striped bordered hover variant="dark">
      <tbody>{
        todo.map( (wert,nummer)=>
        <TodoEintrag key={nummer}
          wert={wert}
          loeschen={loeschen.bind(null,nummer)}
        />)
      }</tbody>
    </Table>
  );
};

export default TodoListe;
