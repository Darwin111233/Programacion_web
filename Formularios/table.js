document.getElementById('btn').addEventListener('click',() => {
    let tbody = document.getElementById("tableCont");
    
    let nombre ="Darwin";
    let edad = "19";
    let prog = "ISC";
    
    let input = document.getElementById("inputName").value;
    
    tbody.innerHTML += `
    
    <tr>
    <td>${input}</td>
    <td>${edad}</td>
    <td>${prog}</td>
    </tr>
    ` ;
    
});