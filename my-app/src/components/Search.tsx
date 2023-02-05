import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Modal from "./Modal";
interface Props {
  searchBox?: number;
}
export default function Search({ searchBox }: Props) {
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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      component="form"
      onSubmit={onSubmit}
      width={searchBox}
    >
      <TextField
        onChange={onChange}
        fullWidth
        label="지역명, 지하철역 검색"
        size="small"
        value={value}
      />

      <Modal searchResult={result} />
    </Box>
  );
}
