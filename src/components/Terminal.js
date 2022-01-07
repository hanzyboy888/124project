import '../App.css';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

function Terminal(props) {
    const [value, setValue] = useState("")
  
    const handleChange = (event) => {
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
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
      />
      </div>
    );
  }
  
  export default Terminal;