fetch('golfer-data.json')
.then(function(response){

    return response.json();

})

.then(function(golfers){

    let placeHolder = document.querySelector("#data-output");

    let out = "";

    

    for(let golfer of golfers){

        let handicap = (golfer.score - golfer.par);

        let handicapNine = handicap / 2;

        out += `
           <tr>
              <td>${golfer.golferName}</td>
              <td>${golfer.score}</td>
              <td>${handicapNine}</td>
              <td>${handicap}</td>
              <td>${golfer.par}</td>
           </tr>
        `;
     }

    placeHolder.innerHTML = out;
})