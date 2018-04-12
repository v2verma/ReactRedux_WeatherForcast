import React from "react";
import _ from "lodash";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data){
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return (
    <div style={{height: '55%', width: '58%'}}>
      <Sparklines data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}