import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(5)};
`;

export default Wrapper;
