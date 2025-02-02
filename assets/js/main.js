async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    const responseUsers = users.map(function(user) {
        return `
        <div class="user-card">
            <h2>User Number ${user.id}</h2>
            <strong>ID:</strong> ${user.id} <br>
            <strong>Name:</strong> ${user.name} <br>
            <strong>Username:</strong> ${user.username} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Address:</strong> ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} <br>
            <strong>Geo:</strong> ${user.address.geo.lat}, ${user.address.geo.lng} <br>
            <strong>Phone:</strong> ${user.phone} <br>
            <strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a> <br>
            <strong>Company:</strong> ${user.company.name} - ${user.company.catchPhrase} - ${user.company.bs}
        </div>
        `});
    
    document.querySelector(".users").innerHTML = responseUsers.join('');
}


getUsers();
