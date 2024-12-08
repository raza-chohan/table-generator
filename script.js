function tablegenerate (){
    let tableName = Number(document.getElementById("tableName").value)

    let tableCount=Number(document.getElementById("tableCount").value)

    let tr=""

    for(let i=1; i <= tableCount; i++){

        tr +=

            `<tr>
                <td>${tableName}</td>
                <td>x</td>
                <td>${i}</td>
                <td>=</td>
                <td>${tableName * i}</td>
            </tr>`
    }
    
    document.getElementById("mathTable").innerHTML = tr

}