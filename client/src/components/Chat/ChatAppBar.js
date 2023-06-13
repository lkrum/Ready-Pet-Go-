import React from 'react'
import { styled } from "@mui/system";

const MainContainer = styled('div')({
  position: 'absolute',
  marginTop: '0px',
  right: '0',
  height: '48px',
  borderBottom: '1px solid black',
  backgroundColor: '#f7c297',
  width: '72%',
  marginLeft: '292px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0',
})
export default function ChatAppBar() {
  return (
    <MainContainer>AppBar</MainContainer>
  )
}
