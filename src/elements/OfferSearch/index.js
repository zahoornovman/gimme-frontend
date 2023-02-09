import { render } from "@testing-library/react";

function Search(props) {
  console.log(props.list);

  render(<button onClick={() => {}}> click </button>);
}

export default Search;
