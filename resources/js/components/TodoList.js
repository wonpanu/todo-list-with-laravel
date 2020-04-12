import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    console.log("TodoList: ", todos);

    return (
        <ul class="list-group" style={{ marginTop: "2%" }}>
            {todos.map(value => (
                <li
                    class={`list-group-item list-group-item-${
                        value.completed ? `success` : `primary`
                    }`}
                    style={{
                        width: "710px",
                        textDecoration: value.completed
                            ? "line-through"
                            : "none"
                    }}
                >
                    <svg
                        class={`${
                            value.completed
                                ? `bi bi-check-circle`
                                : `bi bi-circle`
                        }`}
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: "10px" }}
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE_TODO",
                                id: value.id
                            })
                        }
                    >
                        {!value.completed ? (
                            <svg>
                                <path
                                    fill-rule="evenodd"
                                    d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg>
                                <path
                                    fill-rule="evenodd"
                                    d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        )}
                    </svg>
                    {value.todo}
                    <span style={{ float: "right" }}>
                        <svg
                            class="bi bi-x-circle"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() =>
                                dispatch({
                                    type: "DELETE_TODO",
                                    id: value.id
                                })
                            }
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                                clip-rule="evenodd"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                                clip-rule="evenodd"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </li>
            ))}
        </ul>
    );
}