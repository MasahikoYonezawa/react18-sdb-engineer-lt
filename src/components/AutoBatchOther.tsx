import {useState} from "react";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const AutoBatchOther = () => {
    console.log("AutoBatchOtherがレンダリング！")

    const [todos, setTodos] = useState<Todo[] | null>(null);
    const [isFinishApi, setIsFinishApi] = useState<boolean>(false)

    const onClickExecuteApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
                setIsFinishApi(true)
            })
    }

    return (
        <div>
            <p>Automatic Batching確認用（その他）</p>
            <button onClick={onClickExecuteApi}>API実行！</button>
            <p>isFinishAPi: {isFinishApi ? 'true' : 'false'}</p>
            {todos?.map((todo) => <p key={todo.id}>{todo.title}</p>)}
        </div>
    )
}
