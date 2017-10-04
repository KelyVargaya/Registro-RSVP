class Model {
  constructor() {
    this.invitees = [];
    this.inputName = null;
    this.callback = null;
  }  

 suscribe(render) {
    this.callback = render;
  }

  notify() {
    this.callback();
  }

  AddInvitees(text) {
    this.invitees.push({
      name: text,
      id: Utils.id(),
      confirmed: false});
    this.notify();
    this.inputName.value = "";
  }

  DeleteInvitee(text) {
    this.invitees = this.invitees.filter(item => item != text);
    this.notify();
  }

  AssistedInvitees(invite, inputName) {
    invite.confirmed = inputName.checked;
    this.notify();
  }
}

const Header = ({ model }) => {
  return (
    <div className="wrapper">
      <header>
        <h1>RSVP</h1>
        <p> Registration APP </p>
        <form id="registrar"
          onSubmit={e => {
            e.preventDefault();
            model.AddInvitees(model.inputName.value);
          }}
        >
          <input 
            type = "text" 
            name = "name" 
            placeholder = "Invite Someone" 
            onChange = {e => (model.inputName = e.target)} />
          <button 
            type="submit" 
            name="submit"
            value="submit">
            Submit</button>
        </form>
      </header>

      <div className="main">
        <h2>Invitees</h2>
        <ul id="invitedList">
          {model.invitees.map(item => <CreateLista key = {item.id} invite={item} model={model} />)}
        </ul>
      </div>
    </div>
  );
}


const CreateLista = ({ invite, model }) => {
  return (
    <li>
      {invite.name}
      <label> Confirmed <input type="checkbox" onChange = {(e) => model.AssistedInvitees(invite, e.target)} checked={invite.confirmed} /></label>
      <button onClick={() => model.DeleteInvitee(invite)}>remove</button>
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
