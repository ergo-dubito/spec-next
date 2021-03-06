// @flow
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 968px;
`

export const JobContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 16px;
  border-bottom: 1px solid ${props => props.theme.border.default};
  flex-direction: column;
  background: ${props => props.theme.bg.wash};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme.bg.default};
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.10);
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out;
  }

  &:active {
    box-shadow: 0 6px 20px rgba(0,0,0,0.09);
    transform :translateY(-2px);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 0 -16px;
    width: calc(100% + 32px);
    border-radius: 0;

    &:hover {
      border-radius: 0;
    }
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
`

export const Role = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
`

export const Description = styled.p`
  margin-top: 8px;
  line-height: 1.4;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
`