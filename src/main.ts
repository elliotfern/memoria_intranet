import { login } from "./services/auth/auth.js";
import { logout } from "./services/cookies/cookiesUtils.js";
import { nameUser } from "./components/userName/userName.js";
import { initButtons } from "./components/fitxaRepressaliat/fitxaRepresaliat.js";
import { cargarTabla } from "./components/taulaDades/taulaDades.js"; // Asegúrate de que la ruta sea correcta

document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.querySelector("#btnLogin") as HTMLButtonElement;

    btnLogin?.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const userName = (document.querySelector("#username") as HTMLInputElement)?.value;
        const password = (document.querySelector("#password") as HTMLInputElement)?.value;

        if (userName && password) {
            login(userName, password);
        } else {
            console.log("Faltan datos para iniciar sesión.");
        }
    });

    const userIdFromStorage = localStorage.getItem('user_id');
    if (userIdFromStorage) {
        nameUser(userIdFromStorage).catch(error => {
            console.error('Error al llamar a nameUser desde localStorage:', error);
        });
    }

    const btnLogout = document.querySelector("#btnSortir") as HTMLButtonElement;
    btnLogout?.addEventListener("click", () => {
        logout();
    });

    // Verificar la URL y llamar a las funciones correspondientes
    const pathArray = window.location.pathname.split('/');
    const pageType = pathArray[pathArray.length - 1]; // Obtenemos el nombre de la página

    if (pageType === 'represaliats') {
        cargarTabla(pageType); // Llamar a la función para cargar la tabla
    } else if (pageType === 'afusellats') {
        cargarTabla(pageType); // También cargar para afusellats
    } else if (pageType === 'exiliats') {
        cargarTabla(pageType); // También cargar para exiliats
    } else if (pathArray[pathArray.length - 2] === 'fitxa') {
        const id = pathArray[pathArray.length - 1];
        initButtons(id); // Pasar el id
    }
});