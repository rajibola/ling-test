import styled from "styled-components";
import tw from "twin.macro";
import { ListHeaderProps } from "../../types";

const List = styled.div`
  ${tw`grid-cols-[2fr 1fr 1fr 1fr] grid`}
`;

export const ListHeader = ({ titles }: ListHeaderProps) => {
  return (
    <List className="grid grid-cols-[2fr 1fr 1fr 1fr]">
      {titles.map((title, idx) => {
        return (
          <div
            className="p-1 pl-2 border truncate text-white bg-black lg:text-lg sm:text-sm"
            key={title}
          >
            {title}
          </div>
        );
      })}
    </List>
  );
};
