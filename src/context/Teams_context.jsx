import { useState } from "react";
import { createContext } from "react";

export const TeamsContext = createContext()

// eslint-disable-next-line react/prop-types
const TeamsProvider = ({ children }) => {

    let [teams, setTeams] = useState([
        { name: "Team one", score: 0, id: 1 },
        { name: "Team two", score: 0, id: 2 },
        { name: "Team three", score: 0, id: 3 },
        { name: "Team four", score: 0, id: 4 },
    ])

    let handleScore = (id, data) => {
        typeof (data) === 'number'
            ?
            setTeams(teams.map(team => team.id === id && { ...team, score: data } || team))
            :
            setTeams(teams.map(team => team.id === id && { ...team, name: data } || team))
    }

    return (
        <TeamsContext.Provider value={{ teams, handleScore }}>
            {children}
        </TeamsContext.Provider>
    );
}

export default TeamsProvider;