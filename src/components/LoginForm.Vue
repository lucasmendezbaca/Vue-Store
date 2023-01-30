<script setup>
    import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { auth } from "../firebase";
    import { ref } from "vue";
    import { router } from "../router";

    const email = ref("");
    const password = ref("");

    function loginAdmin() {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            router.push("/admin-panel");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    function loginAdminGoogle() {
        signInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredential) => {
            const user = userCredential.user;
            router.push("/admin-panel");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
</script>

<template>
    <div class="main_login__login">
        <h2>INICIAR SESIÓN</h2>
        <div class="form">
            <div class="form__input_div">
                <label for="email_login">Email</label>
                <input v-model="email" type="email" name="email_login" id="email_login" patther="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/" required>
            </div>
            <div class="form__input_div">
                <label for="password_login">Contraseña</label>
                <input v-model="password" type="password" name="password_login" id="password_login" title="Debe contener al menos un número y una mayúscula y minúscula, y al menos 8 o más caracteres" required>
            </div>
            <button @click="loginAdmin" class="button first-admin-button">INICIAR SESIÓN</button>
            <button @click="loginAdminGoogle" class="button">INICIAR SESIÓN CON GOOGLE</button>
        </div>
    </div>
</template>