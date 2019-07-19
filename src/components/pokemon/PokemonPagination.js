import React from "react";

const Paginate = ({ postsPerPage, totalPosts, paginates }) => {
  const PageNumbers = [];
  // round UP for posts
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {/* loop through page numbers */}
        {PageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button className='page-link' onClick={() => paginates(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
