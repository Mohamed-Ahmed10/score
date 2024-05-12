import { useState } from "react";
import { createContext } from "react";

export const TeamsContext = createContext()

// eslint-disable-next-line react/prop-types
const TeamsProvider = ({ children }) => {

    let [teams, setTeams] = useState([
        { score: 0, id: 1 },
        { score: 0, id: 2 },
        { score: 0, id: 3 },
        { score: 0, id: 4 },
    ])

    let handleScore = (id, score) => {
        let scoreNum = Number(score);
        let teamsCopy = teams.map(team => team.id === id && { score: scoreNum, id } || team);

        setTeams(teamsCopy)
        console.log(teams)
    }

    return (
        <TeamsContext.Provider value={{ teams, handleScore }}>
            {children}
        </TeamsContext.Provider>
    );
}

export default TeamsProvider;