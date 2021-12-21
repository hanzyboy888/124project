import './App.css';
import React, {useState} from 'react';
import FileUploaderEditor from './components/FileUploaderEditor';
import Box from '@mui/material/Box';
import Table from './components/Table';


function App() {
  const [lexemes, setLexemes] = useState([])
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
        <FileUploaderEditor setLexemes = {setLexemes}/>
        <Box className = "outputBox" >
          Hello World
      </Box>
      </div>
      <div className = "lower">
        <Table renderData = {lexemes} columns = {lexemeTableHeader} title = {"Lexemes"}/>
        <Table title = {"Symbol"} columns = {symbolTableHeader}/>
      </div>
    </div>
  );
}

export default App;
