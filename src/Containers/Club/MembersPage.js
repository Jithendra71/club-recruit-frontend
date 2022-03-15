import React from "react";

const List = [["varchas", "2019"], ["Gowtham", "2020"], ["Jithendra", "2019"]];
const MembersPage = () => {
  return (
    <ul>
      {List.map((item) => {
        return (
          <li>
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default MembersPage;
