import React from "react";

const Pageination = ({ itemPerPage, totalItem, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pageination">
        {pageNumbers.map((number) => (
          <li>
            <a onClick={() => pagination(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pageination;
