const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const firstName = document.getElementById("firstname").value;
	const lastName = document.getElementById("lastname").value;
	const email = document.getElementById("email").value;
	const desc = document.getElementById("desc").value;

	alert(`
        Firstname = ${firstName}
        Lastname = ${lastName}
        Email = ${email}
        Pertanyaan/Masukan = ${desc}
    `);
	form.reset();
});
