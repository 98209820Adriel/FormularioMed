
import * as C from './styles';

type Props = {
  title: string;
  subTitle: string;
}

export const AreaTotal = ({title , subTitle}:Props ) => {
  return(
    <C.Container>
        <C.Title>
            <h1>{title}</h1>
        </C.Title>
        <C.SubTitle>
            <h2>{subTitle}</h2>
        </C.SubTitle>
    </C.Container>
  );

};