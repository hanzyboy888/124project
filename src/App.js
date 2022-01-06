import './App.css';
import React, {useState} from 'react';
import FileUploaderEditor from './components/FileUploaderEditor';
import Table from './components/Table';
import Terminal from './components/Terminal';

function App() {
  const [lexemes, setLexemes] = useState([])
  const [symbolTable, setSymbolTable] = useState([])
  const [output, setOutput] = useState("")
  const lexemeTableHeader = [
    { id: 'lexeme', label: 'Lexeme' },
    { id: 'classification', label: 'Classification' },
  ];
  const symbolTableHeader = [
    { id: 'identifier', label: 'Identifier'},
    { id: 'value', label: 'Value'}
  ]
  return (
    <div className ="main">
      <div className = "upper">
        <FileUploaderEditor setLexemes = {setLexemes} setOutput = {setOutput}/>
        <Terminal classname = "terminal" renderData = {output}/>
      </div>
      <div className = "lower">
        <Table renderData = {lexemes} columns = {lexemeTableHeader} title = {"Lexemes"}/>
        <Table renderData = {symbolTable} title = {"Symbol"} columns = {symbolTableHeader}/>
      </div>
    </div>
  );
}

export default App;