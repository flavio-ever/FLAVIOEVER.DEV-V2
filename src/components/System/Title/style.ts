import styled from 'styled-components'
import tw, { css } from 'twin.macro'

export const Container = styled.div(() => [tw`w-full flex`, css``])

export const H1 = styled.h1(() => [tw`text-white-1 text-3xl`, css``])

export const Line = styled.div(() => [
  tw`flex-1 relative`,
  css`
    ::before {
      content: '';
      right: 0;
      left: 1.5rem;
      width: calc(100% - 1.5rem);
      border-bottom: 1px solid rgb(250, 250, 250, 0.1);
      position: absolute;
      top: 50%;
    }
  `
])
