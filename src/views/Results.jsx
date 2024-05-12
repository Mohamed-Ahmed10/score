import { TeamsContext } from "../context/Teams_context"
import { useContext } from "react"

export default function Results() {
    let teams = useContext(TeamsContext)
    
    return (
        <div>
            <div className="score_container justify-content-center">
                {/* <div className="highlight me-4">
                    <h1>Your Result</h1>
                    <div className="circle">
                        <span className="mb-1">76</span>
                        <p>of 100</p>
                    </div>

                    <span>Great</span>
                    <p>
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div> */}
                <div className="content p-3 mt-4">
                    <h2 className="summary text-center">Summary</h2>
                    {/* Add green */}
                    {
                        teams.teams.map((team, index) =>
                            <div key={team.id} className={`summary-item fw-bold ${index === 0 ? 'green' : ''}`}>
                                <p>{team.name}</p>
                                <span>{team.score}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
