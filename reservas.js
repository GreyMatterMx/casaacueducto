document.getElementById('reservaForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    console.log(`Reserva creada para: ${nombre} el ${fecha} a las ${hora}`);
    alert('Reserva guardada localmente (aún falta conectar Firebase)');
});
