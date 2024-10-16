"use client"
import React, { ChangeEvent } from "react";

interface TextareaProps {
    minRows: number
    className: string
    onChange :(e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextarea = ({minRows, className, onChange}: TextareaProps) => {
    const [rows, setRows] = React.useState(minRows);
    const [value, setValue] = React.useState("");
    
    React.useEffect(() => {
      const rowlen = value.split("\n");
  
      if (rowlen.length > minRows) {
        setRows(rowlen.length);
      }
    }, [value]);
  
    return (
      <textarea placeholder="Add description" onChangeCapture={onChange} className={className} rows={rows} onChange={(text) => setValue(text.target.value)} />
    );
  }

  export default CustomTextarea