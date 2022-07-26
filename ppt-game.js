function ramdom_select_ppt() {
    let options = ['Piedra', 'Papel', 'Tijera'];

    return options[Math.floor(Math.random() * options.length)]
}

function validate(user, machine) {

  switch (true) {
      case user === machine:
        return 'Tie!!'
      case user === 'Piedra' && machine === 'Tijera':
        return 'User Win!!'
      case user === 'Tijera' && machine === 'Papel':
        return 'User Win!!'
      case user === 'Papel' && machine === 'Piedra':
        return 'User Win!!'
      default:
        return 'Machine Win!!'
  }
}

function game(n) {
  var num = n;

  let options = ['Piedra', 'Papel', 'Tijera'];

  var machine_option = ramdom_select_ppt();

  if (num >= 0 && num <= options.length) {
      var user_option = options[num];
      console.log(machine_option + ' vs ' + user_option)
      alert(
        'you chose: '
        + user_option
        + '\n'
        + 'The machine chose: '
        + machine_option
        +'\n'
        + validate(user_option, machine_option)
      );
  }
}