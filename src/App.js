
import React, { useState } from 'react';

import Eingabe   from './component/Eingabe'
import TodoListe from './component/TodoListe'

let todoDefault;
try {
  todoDefault = JSON.parse(
    localStorage.getItem('liste')
  )||[];
} catch (e){
  todoDefault = [];
};

const listeSpeichern = liste => {
  try {
    localStorage.setItem('liste',JSON.stringify(liste));
  } catch(e){}
}

function App(){
  const [ todo, setzeTodo ] = useState(todoDefault);

  const loeschen = (nummer)=> {
    const neueListe = todo.filter( (_,n)=> !( n === nummer ) );
    setzeTodo( neueListe );
    listeSpeichern( neueListe );
  }

  const hinzufuegen = (eingabe) => {
    const neueListe = [eingabe,...todo];
    setzeTodo( neueListe );
    listeSpeichern( neueListe );
  }

  return (
  <>
    <Eingabe hinzufuegen={hinzufuegen} titel="+"/>
    <TodoListe todo={todo} loeschen={loeschen}/>
  </>
)};

export default App;
