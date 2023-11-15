import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useIntern } from "../../hooks/useIntern";
import { useAllInterns } from "../../hooks/useAllInterns";
import Board from "../components/Board";
import Header from "../components/header";
import Tags from "../components/Tag";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // const {intern, isLoading, isError} = useIntern(3);
  const { intern, isLoading, isError } = useAllInterns();
  console.log("response", intern);
  if (isError) return <div>Load is Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  // データの例です。実際のデータ構造に合わせてください。

  // 現在のページに表示するデータを計算
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = intern.slice(indexOfFirstItem, indexOfLastItem);

  // ページ切り替え関数
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Header></Header>
      <Tags></Tags>
      <Stack spacing={2} justifyContent="center" alignItems="center" style={{ margin: 20 }}>
        <Pagination
          count={Math.ceil(intern.length / itemsPerPage)}
          variant="outlined"
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
      {currentItems.map((item, index) => (
        <Board key={index} data={item} />
      ))}
      <Stack spacing={2} justifyContent="center" alignItems="center" style={{ margin: 20 }}>
        <Pagination
          count={Math.ceil(intern.length / itemsPerPage)}
          variant="outlined"
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
}
