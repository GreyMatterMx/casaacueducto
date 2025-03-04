document.getElementById('reservaForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    console.log(`Reserva creada para: ${nombre} el ${fecha} a las ${hora}`);
    alert('Reserva guardada localmente (aún falta conectar Firebase)');
});

// Importar Firebase (versión modular desde CDN oficial para proyectos puros)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración de Firebase (la tuya, corregida)
const firebaseConfig = {
    apiKey: "AIzaSyC_11F_hVfy_OzGu7dpWlXiT8Nw0RctoLQ",
    authDomain: "casa-acueducto-morelia.firebaseapp.com",
    projectId: "casa-acueducto-morelia",
    storageBucket: "casa-acueducto-morelia.appspot.com",  // <-- Corregido
    messagingSenderId: "935783455310",
    appId: "1:935783455310:web:b30285754cb895d7abc11f",
    measurementId: "G-HXTEDQY7N6"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Capturar el formulario y guardar en Firestore
document.getElementById('reservaForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    try {
        const docRef = await addDoc(collection(db, "reservas"), {
            nombre,
            fecha,
            hora,
            timestamp: new Date()
        });
        alert('✅ Reserva guardada correctamente');
        console.log("Reserva guardada con ID: ", docRef.id);
    } catch (error) {
        console.error("❌ Error al guardar la reserva: ", error);
        alert('Error al guardar la reserva');
    }
});
