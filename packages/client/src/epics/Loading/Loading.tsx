import { TComponentProps } from '../../definitions';

export type TProps = TComponentProps & {};

export const Loading: React.FC<TProps> = (): JSX.Element => {
  return <CWrap>
    <Spinner />
    <TextBlock>
      <Title>Hello!</Title>
      <ShortDescription>Hello!</ShortDescription>
      <FullDescription>Hello!</FullDescription>
    </TextBlock>
  </CWrap>;
};

export default Loading;
