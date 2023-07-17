import React, { useContext } from "react";
import { createDataContext, createApiProvider2 } from "../App";

export default function ChildC() {
  const name = useContext(createDataContext);
  const age = useContext(createApiProvider2);
  return (
    /**using Consumer
     *  <createDataContext.Consumer>
      {(name) => {
        return (
          <createApiProvider2.Consumer>
            {(age) => {
              return (
                <div>
                  ChildC {name}
                  age {age}
                </div>
              );
            }}
          </createApiProvider2.Consumer>
        );
      }}
    </createDataContext.Consumer>
     */

    /**
     * by using useContext hook
     */
    <div>
      my name is {name} and age is {age}
    </div>
  );
}
