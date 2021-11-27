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
  return (
    <div className ="main">
      <div className = "upper">
        <FileUploaderEditor setLexemes = {setLexemes}/>
        <Box className = "outputBox" >
          Hello World
      </Box>
      </div>
      <div className = "lower">
        <Table renderData = {lexemes} columns = {lexemeTableHeader}/>
        <Table />
      </div>
    </div>
  );
}

export default App;
