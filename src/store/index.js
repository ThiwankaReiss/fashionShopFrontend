import { proxy } from "valtio";
const state=proxy({
    customer:null,
    navButton:1,
    color:'#EFBD48',
    selectedDress:null,
    situation:null
});
export default state;