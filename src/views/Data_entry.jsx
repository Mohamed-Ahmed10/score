import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { TeamsContext } from '../context/Teams_context';

export default function Data_entry() {
    let team = useContext(TeamsContext)
    console.log(team)
    return (
        <div>
            <h3 className='score_title text-center text-white my-3'>Team one</h3>
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="text"
                onChange={(event) => team.handleScore(1, event.target.value)}
                placeholder="Team 1 name"
            />
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="number"
                onChange={(event) => team.handleScore(1, +event.target.value)}
                placeholder="Team 1 score"
            />
            <hr />
            <h3 className='score_title text-center text-white my-3'>Team two</h3>
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="text"
                onChange={(event) => team.handleScore(2, event.target.value)}
                placeholder="Team 2 name"
            />
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="number"
                onChange={(event) => team.handleScore(2, +event.target.value)}
                placeholder="Team 2 score"
            />
            <hr />
            <h3 className='score_title text-center text-white my-3'>Team three</h3>
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="text"
                onChange={(event) => team.handleScore(3, event.target.value)}
                placeholder="Team 3 name"
            />
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="number"
                onChange={(event) => team.handleScore(3, +event.target.value)}
                placeholder="Team 3 score"
            />
            <hr />
            <h3 className='score_title text-center text-white my-3'>Team four</h3>
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="text"
                onChange={(event) => team.handleScore(4, event.target.value)}
                placeholder="Team 4 name"
            />
            <Form.Control
                className="w-50 mx-auto mt-4"
                type="number"
                onChange={(event) => team.handleScore(4, +event.target.value)}
                placeholder="Team 4 score"
            />
            <hr />
        </div>
    )
}
