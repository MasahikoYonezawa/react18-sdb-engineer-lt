import {useState} from "react";
// import {flushSync} from "react-dom";

export const AutoBatchEventHandler = () => {
    console.log("AutoBatchEventHandlerがレンダリング！")

    const [state1, setState1] = useState<number>(0);
    const [state2, setState2] = useState<number>(0);
    // const [state3, setState3] = useState<number>(0);

    const onClickUpdateButton = () => {
        // flushSync(() => {
        //     setState3((state3) => state3 + 1)
        // })
        console.log("state1: ", state1);
        setState1((state1) => state1 + 1);
        console.log("state1: ", state1);
        setState2((state2) => state2 + 1);

    }

    return (
      <div>
          <p>Automatic Batching確認用（イベントハンドラ）</p>
          <button onClick={onClickUpdateButton}>State更新</button>
          <p>State1: {state1}</p>
          <p>State2: {state2}</p>
          {/*<p>State3: {state3}</p>*/}
      </div>
  )
}
