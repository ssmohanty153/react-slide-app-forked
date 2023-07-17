import React, { useState } from "react";

export default function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const addList = () => {
    //bed
    // console.log(activity);
    // setListData([...listData, activity]);
    // console.log(listData);
    //good

    setListData((prevdata) => {
      const updateList = [...prevdata, activity];
      setActivity("");
      return updateList;
    });
  };

  const removeTodoList = (index) => {
    // setListData((prevdata) => {
    //   const updateList = prevdata.splice(index, 1);
    //   return updateList;
    // });

    const updateList = listData.filter((ele, id) => {
      return i !== id;
    });
    setListData(updateList);
  };

  const removeAllTodoList = () => {
    setListData([]);
  };
  return (
    <>
      <div className="Container">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button onClick={addList}>Add</button>

        {listData !== [] &&
          listData.length > 0 &&
          listData.map((data, index) => {
            return (
              <>
                <div key={index}>{data}</div>
                <button onClick={(index) => removeTodoList(index)}>
                  remove(-)
                </button>
              </>
            );
          })}

        {listData.length > 0 && (
          <button onClick={removeAllTodoList}>removeAll(-)</button>
        )}
      </div>
    </>
  );
}
