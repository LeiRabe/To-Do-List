import TodoCard from "./TodoCard"

//the props param is defined 
export default function TodoList(props) {
    const {todos} = props;
    return (
        //to render out the list on the screen: mapping out contexts
        //<TodoCard></TodoCard> --> Parent element and the <p></p> is the child element 
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    //to pass props through multiple component: spread the props of the parent
                    //the element ({todo}) inside of the child component (<TodoCard>) can be called in the passed as (children)
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}

