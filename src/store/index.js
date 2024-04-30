import { proxy } from "valtio";
const state=proxy({
    customer:null,
    navButton:1,
    color:'#EFBD48',
    isLogoTexture: true,
    isFullTexture:true,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
    sideLogo:'logoInti.png',
    belt:'belt.png'
});
export default state;