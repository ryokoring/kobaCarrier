import React from 'react'
import Board from "../components/Board"
import Header from "../components/header"
import Tags from "../components/Tag"


export default function Home() {
  useEffect
const data = [
  { 平均年収:"830万",開催時期: '12/24', 選考: "あり", 応募締切: '10/18' }
]
return (
  <>
  <Header></Header>
  <Tags></Tags>
  <Board data = {data}></Board>
  <Board data = {data}></Board>
  <Board data = {data}></Board>
  <Board data = {data}></Board>
  <Board data = {data}></Board>
  <Board data = {data}></Board>
  <Board data = {data}></Board>
  <Board data = {data}></Board>

  </>
)
}

