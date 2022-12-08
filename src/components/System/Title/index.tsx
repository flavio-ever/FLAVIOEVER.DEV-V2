import * as S from './style'

// eslint-disable-next-line @typescript-eslint/ban-types
type TitleProps = {}

const Title: React.FC<TitleProps> = ({ children }) => (
  <S.Container>
    <S.H1>{children}</S.H1>
    <S.Line />
  </S.Container>
)

export default Title
