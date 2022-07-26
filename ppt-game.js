function ramdom_select_ppt() {
    let options = ['Piedra', 'Papel', 'Tijera'];

    return options[Math.floor(Math.random() * options.length)]
}

function validate(user, machine) {

  if (user == machine){
    return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'Tie!!');

  } else if (user == 'Piedra' && machine == 'Tijera') {
     return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'User Win!!');

  } else if (user == 'Tijera' && machine === 'Papel') {
     return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'User Win!!');

  } else if (user == 'Papel' && machine == 'Piedra') {
     return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'User Win!!');

  } else if (user == 'Tijera' && machine == 'Piedra') {
     return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'Machine Win!!');

  } else if (user == 'Papel' && machine == 'Tijera') {
    return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'Machine Win!!');

  } else if (user == 'Piedra' && machine == 'Papel') {
    return ('you chose: ' + user + '\n' + 'The machine chose: ' + machine + '\n' + 'Machine Win!!');
  }
}

function game(n) {
  var num = n;

  let options = ['Piedra', 'Papel', 'Tijera'];

  var machine_option = ramdom_select_ppt();

  if (num >= 0 && num <= options.length) {
      var user_option = options[num];
      console.log(machine_option + ' vs ' + user_option)
      alert(validate(user_option, machine_option));
  }
}