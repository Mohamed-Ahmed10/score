import { TeamsContext } from "../context/Teams_context"
import { useContext } from "react"

export default function Results() {
    let teams = useContext(TeamsContext)

    let sortedTeams = teams.teams.sort((a, b) => (a.score > b.score) ? -1 : 1);


    return (
        <div>
            <div className="score_container justify-content-center">
                <div className="content p-3 mt-4">
                    <h2 className="summary text-center">Summary</h2>
                    {/* Add green */}
                    {
                        sortedTeams.map((team, index) =>
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
