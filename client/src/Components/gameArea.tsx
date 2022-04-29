import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from "react-redux"

import './Styles/gameArea.css'
import { getRollValue } from '../Redux-data/action'
import { InitialState, Frame } from '../Types/types'

export default function gameArea() {
    //localStorage.clear();
    const dispatch = useDispatch();
    const frameValues = useSelector((state: InitialState) => state)
    let frameData: Frame = {
        currentRoll: frameValues.currentRoll,
        frameTotal: frameValues.frameTotal,
        frameValue: frameValues.frameValue,
        gameTotal: frameValues.gameTotal,
        historicRolls: frameValues.historicRolls,
        rollIndex: frameValues.rollIndex,
        strike: frameValues.strike,
    }
    var index = 0
    //Choosing number of pins down
    const selectRollValue = (rollValue: Number) => {
        //1. Eliminate the buttons based on current value
        //2. Check for strike
        //3. Display data in the table
        if (rollValue < 10) {
            frameData.currentRoll = rollValue
            frameData.rollIndex = index + 1
            frameData.strike = false
            frameData.historicRolls = frameData.historicRolls
            frameData.frameTotal = frameData.frameTotal
            frameData.frameValue = frameData.frameValue
            frameData.gameTotal = frameData.gameTotal
        }
        else if (rollValue === 10) {
            frameData.currentRoll = rollValue
            frameData.rollIndex = index + 2
            frameData.strike = true
            frameData.historicRolls = frameData.historicRolls
            frameData.frameTotal = frameData.frameTotal
            frameData.frameValue = frameData.frameValue
            frameData.gameTotal = frameData.gameTotal
        }
        console.log(frameData)
        dispatch(getRollValue(frameData))
    }

    return (
        <div className="divBody">
            <Card className="cardBody">
                <h4>Click to select the number of pins down:</h4>
                <button className="btn" value="0" onClick={() => {
                    selectRollValue(0)
                }} >0</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" value="1" onClick={() => {
                    selectRollValue(1)
                }} >1</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" value="2" onClick={() => {
                    selectRollValue(2)
                }} >2</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" value="3" onClick={() => {
                    selectRollValue(3)
                }} >3</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(4)
                }} >4</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(5)
                }} >5</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(6)
                }} >6</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(7)
                }} >7</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(8)
                }} >8</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(9)
                }} >9</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    selectRollValue(10)
                }} >10</button>
                <br></br>
                <br></br>
                <table>
                    <thead>
                        <tr>
                            <th>Frame-1</th>
                            <th>Frame-2</th>
                            <th>Frame-3</th>
                            <th>Frame-4</th>
                            <th>Frame-5</th>
                            <th>Frame-6</th>
                            <th>Frame-7</th>
                            <th>Frame-8</th>
                            <th>Frame-9</th>
                            <th>Frame-10</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div >
    )
}