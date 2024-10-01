import { login } from './services/auth/auth.js';
import { logout } from './services/cookies/cookiesUtils.js';
import { nameUser } from './components/userName/userName.js';


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

    // Tancar sessio cookies delete
    const btnLogout = document.querySelector("#btnSortir") as HTMLButtonElement;
    btnLogout?.addEventListener("click", () => {
        logout(); // Llama a la función logout
    });
});
