import React from 'react'
import Button from "../../../components/Button"
import {useState} from "react"
import styles from "../../../styles/Home.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useRouter } from "next/router";
const PostThreads = () => {
  const router = useRouter();
  const [Company, setCompany] = useState("");
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Saraly, setSaraly] = useState("");
  const [Period, setPeriod] = useState("");
  const [select, setSelect] = useState("");
  const [Deadline, setDeadline] = useState("");
  const [contributor,setContributor] = useState("");
  const [future, setFuture] = useState("");
  const [flow, setFlow] = useState("");
  const [method, setMethod] = useState("");
  const handleInputCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputDetails = (e) => {
    setDetails(e.target.value);
  };
  const handleInputSaraly = (e) => {
    setSaraly(e.target.value);
  };
  const handleInputPeriod = (e) => {
    setPeriod(e.target.value);
  };
  const handleInputSelect = (e) => {
    setSelect(e.target.value);
  };
  const handleInputDeadline = (e) => {
    setDeadline(e.target.value);
  };
  const handleInputContributor = (e) => {
    setContributor(e.target.value);
  }
  const handleInputFuture = (e) => {
    setFuture(e.target.value);
}
const handleInputFlow = (e) => {
    setFlow(e.target.value);
}
const handleInputMethod = (e) => {
    setMethod(e.target.value);
}
  const handleDetermine = () => {
    router.push("../../admin/home");
  }
  
  
  return (
    <div className={styles["center"]}>
      <h2 className={styles["wf-hannari"]}>入力画面</h2>
      <div className={styles["marginTop10"]}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="会社名" onChange={handleInputCompany} variant="outlined" />
      <TextField id="outlined-basic" label="平均年収" onChange={handleInputSaraly} variant="outlined" />
    </Box>
      </div>
      <div className={styles["marginTop10"]}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField id="outlined-basic" label="インターンのタイトル" onChange={handleInputTitle} variant="outlined" />
      <TextField
          id="outlined-multiline-static"
          label="内容の詳細"
          multiline
          rows={4}
        />
    
      </Box>

      </div>
      <div className={styles["marginTop10"]}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField id="outlined-basic" label="開催時期" onChange={handleInputPeriod} variant="outlined" />
      <TextField id="outlined-basic" label="締切" onChange={handleInputDeadline} variant="outlined" />
      </Box>
      </div>
      <div className={styles["marginTop10"]}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="将来活かせる仕事" onChange={handleInputFuture} variant="outlined" />
      <TextField id="outlined-basic" label="選考フロー" onChange={handleInputFlow} variant="outlined" />
    </Box>
      </div>
      <div className={styles["marginTop10"]}>
        <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}> 
        <InputLabel id="demo-simple-select-helper-label">方式</InputLabel>     
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={method}
          label="Select"
          onChange={handleInputMethod}
        >
          <MenuItem value={10}>対面</MenuItem>
          <MenuItem value={20}>Web</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}> 
        <InputLabel id="demo-simple-select-helper-label">選考</InputLabel>     
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={select}
          label="Select"
          onChange={handleInputSelect}
        >
          <MenuItem value={10}>あり</MenuItem>
          <MenuItem value={20}>なし</MenuItem>
        </Select>
      </FormControl>
        </Box>
      </div>
      <div className={styles["marginTop10"]}>
      <TextField id="outlined-basic" label="投稿者" onChange={handleInputContributor} variant="outlined" />
      </div>
      <div className={styles["marginTop10"]}>
        <Button onClick={handleDetermine}>投稿する</Button>
      </div>
    </div>
    )
}

export default PostThreads;