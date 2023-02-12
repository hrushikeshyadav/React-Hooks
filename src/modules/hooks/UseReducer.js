import { useReducer } from "react";
import { Button } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state?.count + action.data };
    case "decrement":
      return { ...state, count: state?.count - action.data };
    default:
      break;
  }
};

const initialState = {
  count: 0,
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container-div" style={{ backgroundColor: "#CCC" }}>
      <Button
        variant="primary"
        onClick={() => dispatch({ type: "increment", data: 5 })}
      >
        +
      </Button>
      {state?.count}
      <Button
        variant="primary"
        onClick={() => dispatch({ type: "decrement", data: 5 })}
      >
        -
      </Button>
    </div>
  );
};
export default UseReducer;
