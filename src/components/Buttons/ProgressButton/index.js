import styled from 'styled-components';

export const ProgressButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background: #6b8067;
  color: white;
  padding: 0.6rem 0;
  margin-bottom: 1rem;

  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;

  border: 1px solid transparent;
  border-radius: 2.7029px;

  cursor: pointer;

  &:hover,
  :focus,
  :active {
    outline: 1px solid #63b55c;
    border-radius: 2.7029px;
  }
`;
