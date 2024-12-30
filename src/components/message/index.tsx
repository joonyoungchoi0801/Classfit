import type { MessageProps } from './Message.types';
import * as S from './Message.styles';
import ImageIcon from '../imageIcon';

function Message({ content }: MessageProps) {
  return (
    <S.MessageWrapper>
      <ImageIcon name='Warning' size='2.4rem' />
      {content}
    </S.MessageWrapper>
  );
}

export default Message;
