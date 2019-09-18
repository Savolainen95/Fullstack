import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return <h1> {props.text} </h1>
}

const Popular = (props) => {
    var maxVotes = 0
    var index = 0
    for (let i = 0; i < props.anecdotes.length; i++) {
        if (props.anecdotes[i].votes > maxVotes) {
            maxVotes = props.anecdotes[i].votes
            index = i
        }
    }
    return (
        <div>
            <p>{props.anecdotes[index].anecdote} </p>
            <p> has {props.anecdotes[index].votes} votes </p>
        </div>
    )
}
const Button = (props) => (
    <button onClick={() => props.onClick(Math.floor(Math.random() * props.anecdotes.length))}>
        {props.text}
    </button>
)


const Vote = (props) => (
    <button onClick={() => props.onClick(props.anecdotes[props.selected].votes += 1)}>
        {props.text}
    </button>
)


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(0)
    console.log(props.anecdotes)

    return (
        <div>
            <Header text='Anecdote of the day' />
            <p>{props.anecdotes[selected].anecdote}</p>
            <p>has {props.anecdotes[selected].votes} votes </p>
            <Button anecdotes={props.anecdotes} onClick={setSelected} text='next anecdote' />
            <Vote anecdotes={props.anecdotes} selected={selected} onClick={setPoints} text='Vote' />
            <Header text='Anecdote with most votes' />
            <Popular anecdotes={props.anecdotes} />

        </div>
    )
}

const anecdotes = [
    { anecdote: 'If it hurts, do it more often', votes: 0 },
    { anecdote: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    { anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 }
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)