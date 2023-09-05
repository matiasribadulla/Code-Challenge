const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    event.preventDefault();
    let data = {
        Nombre: document.getElementById("name").value,
        Apellido: document.getElementById("sirname").value,
        Fecha: document.getElementById("date").value,
    };

    let options ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch('https://jsonplaceholder.typicode.com/users', options)
        .then(response => response.json())
        .then((data) => console.log(data));
});
