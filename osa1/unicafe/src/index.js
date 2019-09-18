import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ head }) => {
    return <h1>{head}</h1>
}


const Statistic = ({ text, num }) => {
    return <tr><td>{text}</td><td>{num}</td></tr>
}

const Averege = ({ text, props, good, bad }) => {
    if (props === 0) {
        return <tr><td>{text}</td></tr>
    }
    let average = (good - bad) / props
    return <tr><td>{text}</td><td>{average}</td></tr>
}
const Positive = ({ text, props, good }) => {
    if (props === 0) {
        return <tr><td>{text}</td></tr>
    }
    let precentage = (good / props) * 100
    return <tr><td>{text}</td><td>{precentage}%</td></tr>
}

const Statistics = (props) => {
    if (props.all === 0) {
        return <p> No feedback given.</p>
    }
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const all = props.all

    return (
        <div>
            <table border="0">
                <tbody>
                    <Statistic text='good:' num={good} />
                    <Statistic text='neutral:' num={neutral} />
                    <Statistic text='bad:' num={bad} />
                    <Statistic text='all:' num={all} />
                    <Averege text='Average:' props={all} good={good} bad={bad} />
                    <Positive text='Positive:' props={all} good={good} />
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => (
    <button onClick={() => props.onClick(props.value + 1)}>
        {props.text}
    </button>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (

        <div>
            <Header head='Give feedback' />
            <Button onClick={setGood} value={good} text='good' />
            <Button onClick={setNeutral} value={neutral} text='neutral' />
            <Button onClick={setBad} value={bad} text='bad' />
            <Header head='Statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} all={good + bad + neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)