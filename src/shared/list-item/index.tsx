import styled from "styled-components";
import tw from "twin.macro";
import { ListItemProps } from "../../types";

const List = styled.div`
  ${tw`grid-cols-[2fr 1fr 1fr 1fr] grid`}
`;

const Item = styled.div`
  ${tw`p-1 pl-2 border truncate`}
`;

export const ListItem = ({
  name,
  bananas,
  position,
  isSearchedUser,
  index,
}: ListItemProps) => {
  return (
    <List>
      <Item>{name}</Item>
      <Item>{position ? position : index! + 1}</Item>
      <Item>{bananas}</Item>
      <Item>{isSearchedUser ? "yes" : "no"}</Item>
    </List>
  );
};
