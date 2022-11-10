import { useCallback, useState } from "react";
import { ListItem, SearchBar } from "./shared";
import { ListHeader } from "./shared/list-header";
import { DataType, UserType } from "./types";
import { LEADERBOARD, TITLES } from "./utils";

function App() {
  const DATA = LEADERBOARD as DataType;
  const [data, setData] = useState<UserType[]>();
  const onClickSearch = useCallback(
    (search: string) => {
      const dataValues = Object.values(DATA);
      const checkName = (item: UserType) => item.name === search;
      const itemIndex = dataValues.findIndex(checkName);
      if (itemIndex < 0)
        return alert(
          "This user name does not exist! Please specify an existing user name!"
        );

      const newData = dataValues.sort((a, b) => b.bananas - a.bananas);

      newData.length = 10;

      const checkTopTen = newData.some(checkName);

      if (checkTopTen) {
        const checkSearch = newData.map((item) => {
          if (checkName(item)) return { ...item, isSearchedUser: true };
          return item;
        });
        setData(checkSearch);
      } else {
        const getLast = Object.values(DATA).find(checkName) as UserType;
        const addedToLast: UserType[] = newData.map((item, idx): UserType => {
          if (idx === 9)
            return {
              ...getLast,
              isSearchedUser: true,
              position: itemIndex + 1,
            };
          return item;
        });
        setData(addedToLast);
      }
    },
    [DATA]
  );

  return (
    <div className="App flex flex-col items-center pt-8 w-screen overflow-hidden">
      <SearchBar onClick={onClickSearch} />

      <div className="w-full lg:max-w-5xl mt-10 md:w-full">
        <ListHeader titles={TITLES} />
        {data && (
          <div data-testid="list-item">
            {data.map((item, idx) => {
              return <ListItem key={item.uid} index={idx} {...item} />;
            })}
          </div>
        )}
      </div>
      <div className=" text-red-700">
        * Test with these names: <br />
        Rica Ella Francisco <br /> Ghehan Tuiza Gonzaga <br /> Lawrence Chan
      </div>
    </div>
  );
}

export default App;
