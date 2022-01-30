
$(document).ready(function () {
    setTimeout(() => {
      $("#loading").hide();
      $("#main").show("slow");
    }, 3000);
  });
  
const API = 'https://api.football-data.org/v2/competitions/2014/matches';
token = "bbfabdaa390c482796937c0851dc1938";
const headers = {
    headers: {
        "X-Auth-Token": token,
    },
    };


const getMatches = async () => {
    try {
        const response = await axios.get(API, headers);
        const listMatch = response.data.matches;
        // console.log(match)
        let listHtml ="";
        listMatch.forEach((element, index) => {
            console.log(element);
            listHtml += `
            <div class="main-matchday">
                <div class="logo-home">
                    <img src="img/home.png" style="height: 50px; width: auto;"alt="">
                </div>
                <div class="team-home">
                    <p>${element.homeTeam.name}</p>
                </div>
                <div class="score-home">
                    <p>${element.score.fullTime.homeTeam}</p>
                </div>
                <div class="logo-away">
                    <img src="img/away.png"style="height: 50px; width: auto;" alt="">
                </div>
                <div class="team-away">
                   <p>${element.awayTeam.name}</p>
                </div>
                <div class="score-away">
                    <p>${element.score.fullTime.awayTeam}</p>
                </div>
                <div class="date">
                    <p>${element.utcDate}</p>
                </div>
            </div>
            `


            
        });
        $("#main-matchday").html(listHtml);
        
        console.log(response)    
    }
    catch (error) {
        console.log(error)
    }
};
getMatches();


 // '+ data.homeTeam.name+'

            // '+data.score.fullTime.homeTeam+'
            // '+data.awayTeam.name+'

            // '+data.score.fullTime.awayTeam+'
            // '+data.season.utcDate+'

            // <div class="main-matchday">
            //     <div class="logo-home">
            //         <img src="man utd.png" style="height: 50px; width: auto;"alt="">
            //     </div>
            //     <div class="team-home">
            //         <p>${element.homeTeam.name}</p>
            //     </div>
            //     <div class="score-home">
            //         <p>${element.score.fullTime.homeTeam}</p>
            //     </div>
            //     <div class="logo-away">
            //         <img src="man city.png"style="height: 50px; width: auto;" alt="">
            //     </div>
            //     <div class="team-away">
            //        <p>${element.awayTeam.name}</p>
            //     </div>
            //     <div class="score-away">
            //         <p>${element.score.fullTime.awayTeam}</p>
            //     </div>
            //     <div class="date">
            //         <p>2021-08-13T19:00:00Z</p>
            //     </div>
            // </div>
            // `




        //     <div class="main-container">
        //     <div class="header-main">
        //         <h5>Machday ${element.matchday}</h5>
        //     </div>
        //     <div class="content-main" >
        //         <div class="content-matchday"id="main-matchday">
        //     <div class="main-matchday">
        //         <div class="logo-home">
        //             <img src="man utd.png" style="height: 50px; width: auto;"alt="">
        //         </div>
        //         <div class="team-home">
        //             <p>${element.homeTeam.name}</p>
        //         </div>
        //         <div class="score-home">
        //             <p>${element.score.fullTime.homeTeam}</p>
        //         </div>
        //         <div class="logo-away">
        //             <img src="man city.png"style="height: 50px; width: auto;" alt="">
        //         </div>
        //         <div class="team-away">
        //            <p>${element.awayTeam.name}</p>
        //         </div>
        //         <div class="score-away">
        //             <p>${element.score.fullTime.awayTeam}</p>
        //         </div>
        //         <div class="date">
        //             <p>${element.utcDate}</p>
        //         </div>
        //     </div>
        // </div>
        //     </div>
        // </div>