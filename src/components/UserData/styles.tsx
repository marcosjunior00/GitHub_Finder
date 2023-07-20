import styled from "styled-components";

export const Container = styled.div`
  padding: 1.3rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 90%;
  border-radius: 50%;
`;

export const Name = styled.h2``;

export const Login = styled.h4`
  margin-top: -0.7rem;
  color: #aaa;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const FollowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const FollowersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-right: 2rem;
  border-right: 1px solid #ccc;
`;

export const FollowingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
