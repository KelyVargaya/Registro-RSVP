
class Model{
  constructor(){
      this.invitees = [];
      this.input = null;
      this.callback = null;
      this.check = null;
  }

suscribe(render){
  this.callback = render;
}
notify(){
  this.callback();
}

addInvite(text){
this.invitees.push({
    name:text,
    confirmed: false,
    
});
this.notify();
}

isChecked(invite, input) {
    invite.confirmed = input.checked;
    this.notify();
  }

removeInvite(text){
  this.invitees;
  this.notify();
  }

}


 const Header = ({model}) => {
  return (
    <div className="wrapper">
      <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form id="registrar" onSubmit = {e => {
            e.preventDefault();
            model.addInvite(model.input.value);
              }
            }>
            <input
              type="text"
              name="name"
              placeholder="Invite Someone" />
            <button
              type="submit"
              name="submit"
              value="submit">
              Submit
            </button>

        </form>
      </header>
      <div className="main">
        <h2>Invitees</h2>
        <ul id="invitedList">
          {model.invitees.map(item => <createLista key = {item.id} invite={item} model={model} />)}
        </ul>
      </div>
    </div>
  );
}

const createLista = ({model, invite}) => {
  return (
      <li>
        {invite.name}
        <label> Confirmed <input type="checkbox"  /> </label>
        <button onclick= {() => model.removeInvite(invite)}> Remove </button> 
      </li>

  );     
}
  
let model = new Model();

let render = () => {
  ReactDOM.render(
    <Header title = "Register Invitados" model={model} />,
    document.getElementById('container')
  );
};

model.suscribe(render);
render(); 
 
