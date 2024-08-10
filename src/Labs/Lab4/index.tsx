import PassingFunctions from "./PassingFunctions";
import ArrayStateVariable from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ParentStateComponent from "./ParentStateComponent";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import ObjectStateVariable from "./ObjectStateVariables";
import PassingDataOnEvent from "./PassingDataOnEvent";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />



      <ReduxExamples/>

    </div>
  );
}
