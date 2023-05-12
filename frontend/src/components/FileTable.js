import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../fileSlice";
import { File } from "../types";

const FileTable = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <ul>
      {files.map((file) => (
        <li key={file.id}>{file.name}</li>
      ))}
    </ul>
  );
};

export default FileTable;