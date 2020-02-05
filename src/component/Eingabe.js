
import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

function Eingabe({hinzufuegen,titel}){

  const [eingabe,eingabeSetzen] = React.useState('');

  const eingabeHaendler = (e) =>
    eingabeSetzen(e.target.value)

  const hinzufuegenHaendler = e => {
    hinzufuegen(eingabe);
    eingabeSetzen('');
  }

  return (
    <InputGroup>
      <FormControl value={eingabe} onChange={eingabeHaendler}/>
      <InputGroup.Append>
        <Button onClick={hinzufuegenHaendler}>{titel}</Button>
      </InputGroup.Append>
    </InputGroup>
)};

export default Eingabe;
