import memory from "../assets/icon-memory.svg"
import reaction from "../assets/icon-reaction.svg"
import verbal from "../assets/icon-verbal.svg"
import visual from "../assets/icon-visual.svg"
export default function Home() {
    return (
        <div>Home
            <div className="score_container">
                <div className="highlight">
                    <h1>Your Result</h1>
                    <div className="circle">
                        <span className="mb-1">76</span>
                        <p>of 100</p>
                    </div>

                    <span>Great</span>
                    <p>
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
                <div className="content">
                    <p className="summary">Summary</p>
                    <div className="summary-item orange">
                        <p>
                            <img src={memory} />Memory
                        </p>
                        <span>92 / 100</span>
                    </div>
                    <div className="summary-item red">
                        <p>
                            <img src={reaction} />Reaction
                        </p>
                        <span>80 / 100</span>
                    </div>
                    <div className="summary-item green">
                        <p>
                            <img src={verbal} />Verbal
                        </p>
                        <span>61 / 100</span>
                    </div>
                    <div className="summary-item cobalt">
                        <p>
                            <img src={visual} />Visual
                        </p>
                        <span>72 / 100</span>
                    </div>
                    <button className="continue-btn">Continue</button>
                </div>

                <div className="attribution">
                    Challenge by
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
                    >Frontend Mentor</a
                    >. Coded by <a href="https://github.com/rajnish07">Rajnish Giri</a>.
                </div>
            </div>
        </div>
    )
}
