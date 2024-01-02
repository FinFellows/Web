//resultpolicies 페이지
import React from 'react';

interface SearchResultsProps {
  searchResults: { title: string; content: string }[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  if (searchResults.length === 0) {
    return <div>결과없음</div>;
  }

  return (
    <div>
      {searchResults.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <p>{result.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
