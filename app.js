var url = "http://bcw-getter.herokuapp.com/?url=";
var url2 = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
var apiUrl = url + encodeURIComponent(url2);
// $.getJSON(apiUrl,function(data){
//     var players = data.body.players;
//     var positions = {};
       
//     players.forEach(function(player){
//         //console.log(player);
//        console.log(player.fullname, player.position, player.jersey, player.pro_status, player.pro_team);
//        positions[player.position] = player.position;
//     });
    
//     players.forEach(function(player){
//         if(player.fullname === "Dan Williams"){
//             $('#results').JSONView(player);
//             $('body').prepend('<img src="'+player.photo+'">');
//             return;
//         }
//     });
// });

var PlayersService = function(endpointUri){
    var playersData=[];
    
        this.getPlayersByTeam = function(teamName){
		var filteredPlayers = playersData.filter(function(player){
			return player.pro_team === teamName;
		});
		return filteredPlayers;
	}
    
    this.getPlayersByPosition = function(position){
		var filteredPlayers = playersData.filter(function(player){
			return player.position === position;
		});
		return filteredPlayers;
	}
    
    function loadPlayersData(){
		$.getJSON(endpointUri,function(data){
			playersData = data.body.players;
		});
	};	
	loadPlayersData();
};
var playerService = new PlayersService(apiUrl);
$('#button1').on('click', function() {
	alert('you clicked the button');	
	var sf = playerService.getPlayersByTeam("SF");
	console.log(sf);
});