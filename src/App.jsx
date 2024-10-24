import { useState } from "react";
import "./App.css";

const App = () => {
    const quotes = [
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0, 0, 0]);

    const handleClick=()=>{
        if(selected == quotes.length-1){
            //console.log("im")
            setSelected(0)
        }else{
        setSelected(selected+1)
        }
    }

    const increaseVote = () => {
        const copy = [...votes];
        copy[selected] += 1;
        setVotes(copy);
    };

    const highestVote = votes.indexOf(Math.max(...votes));

    return (
        <div>
            <h2>Quote of the Day</h2>
            <p>
                {quotes[highestVote]}
                <br />
                has {votes[highestVote]} votes
            </p>
           

            <h3>Other quotes:</h3>
            <p>
                {quotes[selected]}
                <br />
                has {votes[selected]} votes
            </p>

            <button onClick={increaseVote}>Vote</button>
            <button onClick={handleClick}>Next Quote</button>
        </div>
    );
};

export default App;
