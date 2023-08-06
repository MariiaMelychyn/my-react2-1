import React, { Component } from "react";
import './FeedbackOptions.css'
import Span from "../Span";

class FeedbackOptions extends Component{
    state = {
        good: null,
        neutral: null,
        bad: null
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
        const totalFeedback = good + neutral + bad;
        const positiveFeedbackPercentage = totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(0) : 0;

        return(
            <>
            <Span 
            handleClick= {this.handleClick}
            handleNeutral = {this.handleNeutral}
            handleBad= {this.handleBad}
            />
            <p>Statistics</p>
            <div className="span">
            {good &&  <span value={good}>Good:{good} </span>}
            {neutral && <span value={neutral}>Neutral: {neutral}</span>}
            {bad && <span value={bad}>Bad: {bad}</span>}
            <span>Total: {totalFeedback} </span>
            <span>Positive fidbeck: {positiveFeedbackPercentage}% </span>
            </div>
            </>
        )
    }

}

export default FeedbackOptions