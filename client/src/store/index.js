import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#FBD",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './college_logo.png',
    fullDecal: './college_logo.png'
});

export default state;