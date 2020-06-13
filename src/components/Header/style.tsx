import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const TriggerSpan = styled.span`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
`;

export const StyledHeader = styled(Header)<{
  collapsed?: boolean;
  isFixed?: boolean;
}>`
  background: #fff;
  padding: 0;
  display: flex;
  transition: width 0.2s;
  ${({ collapsed, isFixed }) =>
    isFixed &&
    `
    z-index: 9;
    width: 100%;
    transition: width 0.2s;
    position: fixed;
    top: 0px;
    right: 0px;
    width: calc(100% - ${collapsed ? '80px' : '256px'});
  `}
`;
