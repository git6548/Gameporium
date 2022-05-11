// const getGames = function() {
//     const apiUrl = "https://www.giantbomb.com/api/games/?api_key=f69140845ff4d02155385c0b54aa36d12f51108f&format=jsonp";
//     const apiKey = 'f69140845ff4d02155385c0b54aa36d12f51108f'
//     fetch(apiUrl)
//         .then(function(response) {
//             if(response.ok) {
//                 console.log(response);
//                 response.json().then(function(games) {
//                     console.log(games);
//                 })                
//             } 
//             else {
//                 console.log(response)
//             }
//         }).catch(function(error) {
//             console.log(error);
//         })    
// }

// getGames();