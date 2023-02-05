import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Modal from "./Modal";

export default function Search() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<SearchResult[]>([]);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await axios({
      method: "GET",
      url: "http://knsan189.iptime.org:8080/api/map/search",
      params: {
        keyword: value,
      },
    });
    console.log(response.data);
    setResult(response.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" alignItems="center">
        <Box>
          <TextField
            onChange={onChange}
            fullWidth
            label="지역명, 지하철역 검색"
            size="small"
            value={value}
          />
        </Box>
        <Box>
          <Modal searchResult={result} />
        </Box>
      </Box>
    </form>
  );
}
