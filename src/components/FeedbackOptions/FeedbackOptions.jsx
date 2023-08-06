import React, { Component } from "react";
import './FeedbackOptions.css'
import Span from "../Span";

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
            <Span 
            handleClick= {this.handleClick}
            handleNeutral = {this.handleNeutral}
            handleBad= {this.handleBad}
            />
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