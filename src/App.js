import './App.css';
import React from 'react';
import FileUploaderEditor from './components/FileUploaderEditor';
import Box from '@mui/material/Box';
import Table from './components/Table';

function App() {
  return (
    <div className ="main">
      <div className = "upper">
        <FileUploaderEditor/>
        <Box className = "outputBox" >
          Hello World
      </Box>
      </div>
      <div className = "lower">
        <Table />
        <Table />
      </div>
    </div>
  );
}

export default App;
