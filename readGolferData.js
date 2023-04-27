fetch('golfer-data.json')
.then(function(response){

    return response.json();

})

.then(function(golfers){

    let placeHolder = document.querySelector("#data-output");

    let out = "";

    for(let golfer of golfers){
        out += `
           <tr>
              <td>${golfer.golferName}</td>
              <td>${golfer.score}</td>
              <td>${golfer.nineHandicap}</td>
              <td>${golfer.handicap}</td>
              <td>${golfer.par}</td>
           </tr>
        `;
     }

    placeHolder.innerHTML = out;
})