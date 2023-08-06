import React, { Component } from "react";
import './FeedbackOptions.css'

class FeedbackOptions extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


      handleClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
      }
      handleNeutral=  () =>{
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
      }
      handleBad = () =>{
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
      }

    render(){
        const {good, neutral, bad  } = this.state
        return(
            <>
            <div className="btn">
            <button type="button" className="btn-good" onClick={this.handleClick}>Good</button>
            <button type="button" className="btn-neutral" onClick={this.handleNeutral}>Neutral</button>
            <button type="button" className="btn-bad" onClick={this.handleBad}>Bad</button>
            </div>
            <p>Statistics</p>
            <div className="span">
            <span value={good}>Good:{good} </span>
            <span value={neutral}>Neutral: {neutral}</span>
            <span value={bad}>Bad: {bad}</span>
            <span>Total: {good + neutral + bad} </span>
            <span>Positive fidbeck: {(good / (good + neutral + bad)  * 100).toFixed(0)}% </span>
            </div>
            </>
        )
    }

}

export default FeedbackOptions