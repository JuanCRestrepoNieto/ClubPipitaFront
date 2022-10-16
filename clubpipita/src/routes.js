import { LandingPage } from "./LandingPage/LandingPage";

const rutas = [
    { path: '/', component: LandingPage },
    { path: '/Inicio', component: LandingPage, exact: true },
    { path: '*', component: LandingPage }
];

export {rutas}