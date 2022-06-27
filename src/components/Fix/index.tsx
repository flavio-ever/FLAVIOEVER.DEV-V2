import React from 'react'
import 'twin.macro'
import { styled } from 'twin.macro'

const AppleBar = styled.div(() => [
  `width: 100vw; height: 100px; position: fixed; z-index: 99; top: -100px; background: #1B1C1F;`
])

const FixContent: React.FC = (props) => {
  return (
    <>
      {/* Fix Notch Apple PWA*/}
      <AppleBar />
      <div tw="min-w-full bg-purple-1">{props.children}</div>
    </>
  )
}

export default FixContent
