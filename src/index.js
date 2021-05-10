import React from "react";
import ReactDom from "react-dom";

import ApprovalCard from "./ApprovalCard";
import CommentBody from "./CommentBody";

const arrName = ["Sam", "Jane", "Bucky"];
const arrCom = ["nice", "Good Descp", "Great !"];

const App = () => (
  <div>
    <div className="ui container comments">
      {/* if we pass components within components
       the parent component gets the a children attribute within its props */}
      <ApprovalCard>
        <h4>WARNING !</h4>
        <hr />
        Are You Sure?
      </ApprovalCard>

      {/* passing CommentBody tag with its props as a prop to ApprovalCard  */}
      <ApprovalCard
        content={<CommentBody author={arrName[0]} coms={arrCom[0]} />}
      />
      <ApprovalCard
        content={<CommentBody author={arrName[1]} coms={arrCom[1]} />}
      />
      <ApprovalCard
        content={<CommentBody author={arrName[2]} coms={arrCom[2]} />}
      />
    </div>
  </div>
);

ReactDom.render(<App />, document.querySelector("#root"));
