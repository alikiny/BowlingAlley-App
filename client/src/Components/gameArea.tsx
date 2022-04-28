import Card from 'react-bootstrap/Card'
// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux"

import './Styles/gameArea.css'
// import { InitialState } from '../Types/types'

function gameArea() {
    // const dispatch = useDispatch();
    // const frameValues = useSelector((state: InitialState) => state);

    const getButtonValue = (btnValue: Number) => {
        localStorage.setItem("btnValue", btnValue.toString())
        //Populate the table from state
    }

    return (
        <div className="divBody">
            <Card className="cardBody">
                <h4>Click to select the number of pins down:</h4>
                <button className="btn" onClick={() => {
                    getButtonValue(0)
                }} >0</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(1)
                }} >1</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(2)
                }} >2</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(3)
                }} >3</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(4)
                }} >4</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(5)
                }} >5</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(6)
                }} >6</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(7)
                }} >7</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(8)
                }} >8</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(9)
                }} >9</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={() => {
                    getButtonValue(10)
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
                            <td>{ }</td>
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

export default gameArea