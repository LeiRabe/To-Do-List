
//props: properties of the component
export default function TodoCard(props) {
    //destructure the children from the properties
    //it's going to give access to all of the children element
    const { children, handleDeleteTodo, index } = props
    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button
                    onClick={() => {
                        handleDeleteTodo(index);
                    }
                    }
                >
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
