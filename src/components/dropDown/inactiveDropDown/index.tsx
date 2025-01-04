import { useEffect, useState } from 'react';
import * as S from './InActiveDropDown.styles';
import type { InActiveDropDownProps } from './InActiveDropDown.types';

function InActiveDropDown({ value, inActive = true }: InActiveDropDownProps) {
  return (
    <S.SelectWrapper>
      <S.SelectButton>{value}</S.SelectButton>
    </S.SelectWrapper>
  );
}

export default InActiveDropDown;
