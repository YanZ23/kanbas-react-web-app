import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";

import ES5functions from "./functions/ES5Functions"; 
import ArrowFuctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataFromArrays from "./arrays/AddingAndRemovingDataFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunctions from "./arrays/FindFunctions";
import FindIndex from "./arrays/FindIndex";
import FilterFunctions from "./arrays/FilterFunctions";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";


function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <ES5functions/>
         <ArrowFuctions/>
         <ImpliedReturn/>
         <FunctionParenthesisAndParameters/>
         <WorkingWithArrays/>
         <ArrayIndexAndLength/>
         <AddingAndRemovingDataFromArrays/>
         <ForLoops/>
         <MapFunction/>
         <JsonStringify/>
         <FindFunctions/>
         <FindIndex/>
         <FilterFunctions/>
         <TemplateLiterals/>
         <House/>
         <Spreading/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
 }
 export default JavaScript
 