import '../App.css';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import lexicalAnalysis from '../utils/lexicalAnalysis'
import symbolTable from '../utils/symbolTable';

function Terminal(props) {
    const [value, setValue] = useState("")
  
    const handleChange = (event) => {
      for(let i = 0; i < props.renderData.length; i++){
        if (props.renderData[i].identifier === "VISIBLE"){
          for(let j = 0; j < props.renderData.value.length; j++){
            // if()
          }
        }
      }
      setValue(event.target.value);
    }; 
    
    return (
      <div className="terminal">
        <TextField
          id="filled-multiline-flexible"
          label=""
          multiline
          minRows={20}
          maxRows={20}
          value={props.renderData}
          // onChange={handleChange}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
      />
      </div>
    );
  }
  
  export default Terminal;