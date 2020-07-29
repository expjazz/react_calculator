import React from 'react'
import Button from './Button'

export default function ButtonPannel() {
  return (
    <div className='ButtomPannelContainer'>
      <div className="rowOne">
        <Button name='AC'/>
        <Button name='+/-'/>
        <Button name='%'/>
        <Button name='÷'/>
      </div>
      <div className="rowTwo">
        <Button name='7'/>
        <Button name='8'/>
        <Button name='9'/>
        <Button name='X'/>
      </div>
      <div className="rowThree">
        <Button name='4'/>
        <Button name='5'/>
        <Button name='6'/>
        <Button name='-'/>
      </div>
      <div className="rowFour">
        <Button name='1'/>
        <Button name='2'/>
        <Button name='3'/>
        <Button name='+'/>
      </div>
      <div className="rowFive">
        <Button name='0'/>
        <Button name='.'/>
        <Button name=','/>
        <Button name='='/>
      </div>
    </div>
  )
}
