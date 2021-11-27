import '../App.css';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import lexicalAnalysis from '../utils/lexicalAnalysis'


function FileUploaderEditor(props) {
  const [code, setCode] = useState("")

  let fileReader;

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleFileRead = (e) => {
    const content = fileReader.result;
    // console.log(content);
    setCode(content)
  }
  
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }
  
  return (
    <div className="fileupload">
    <input type="file" accept = ".lol" onChange={ e => handleFileChosen(e.target.files[0])
      } />
      <TextField
        id="filled-multiline-flexible"
        label="editor"
        multiline
        minRows={20}
        maxRows={20}
        value={code || ""}
        onChange={handleChange}
        variant="filled"
      />
      <Button 
        variant="contained" 
        className = "executeButton"
        onClick = {() => {
          const test = lexicalAnalysis(code);
          props.setLexemes(test)
        }} 
      >EXECUTE</Button>
    </div>
  );
}

export default FileUploaderEditor;