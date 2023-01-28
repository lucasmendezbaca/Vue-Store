<script setup>
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../firebase";
    import { ref } from "vue";
    import { router } from "../router";

    const email = ref("");
    const password = ref("");

    function registerAdmin() {
        createUserWithEmailAndPassword(auth, email.value, password.value)
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
    <div class="main_login__register">
        <h2>REGISTRARSE</h2>
        <div id="form" class="form">
            <div class="form__input_div">
                <label for="email_register">Email</label>
                <input v-model="email" type="email" name="email_register" id="email_register" patther="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/" required>
            </div>
            <div class="form__input_div">
                <label for="password_register">Contraseña</label>
                <input v-model="password" type="password" name="password_register" id="password_register" title="Debe contener al menos un número y una mayúscula y minúscula, y al menos 8 o más caracteres" required>
            </div>
            <button @click="registerAdmin" class="button">REGISTRARSE</button>
        </div>
    </div>
</template>