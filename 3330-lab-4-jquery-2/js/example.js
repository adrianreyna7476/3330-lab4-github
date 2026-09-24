$(function() {
  
  // TODO: Create a list of JS Object each representing a game. 
  // Use the data contained in the <ul> to build this list of game titles.


  var gameList, newItemForm, newItemButton;
  var item = '';                                 
  
  var gametitles = [
    {title: 'The legend of Zelda: Breath of the wild'},
    {title: 'God of War Ragnarok' },
    {title: 'Halo Infinite' },
    {title: 'Minecraft' },
    {title: 'Super Mario Odyssey' },
  ];
  gameList = $('ul');                               
  newItemForm = $('#newItemForm');              
  newItemButton = $('#newItemButton');          

  // TODO:  Render game titles as list items inside the <ul>. 
  // To do so, create a function that loops through each object in the game list, 
  // create a new node "list item" holding the game title and 
  // inject the new node inside the <ul>.

function renderTitle(){
  gameList.empty();
  gametitles.forEach(function(game){
    gameList.append(`<li>${game.title}</li>`);
  });
}
renderTitle();



  function updateCount() {                      
    var items = $('li').length; 
    $('#counter').text(`${items}`);                   
  }
  updateCount();                                 

  
  newItemButton.show();                         
  newItemForm.hide();                           
  $('#showForm').on('click', function() {        
    newItemButton.hide();                       
    newItemForm.show();                         
  });

  
  newItemForm.submit(function(e) {       
    e.preventDefault();                         
    var text = $('input:text').val();           
    gametitles.push({ title:text});
    renderTitle();
    $('input:text').val('');
    updateCount();
  });  



});