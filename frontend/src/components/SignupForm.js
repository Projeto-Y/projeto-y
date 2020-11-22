import { useState} from 'react'

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFirstNameChange(event) {
    const firstName = event.target.value;

    setFirstName(firstName)
  }

  function handleLastNameChange(event) {
    const lastName = event.target.value;

    setLastName(lastName)
  }


  function handleEmailChange(event) {
    const email = event.target.value;

    setEmail(email)
  }


  function handlePasswordChange(event) {
    const password = event.target.value;

    setPassword(password)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password
    }

    await fetch("http://localhost:8000/registrations", formData)

    console.log("Formulário submetido com sucesso!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input type="text" onChange={handleFirstNameChange} value={firstName} id="first-name" />
        </label>
      </div>
      <div>
        <label>
          Sobrenome:
          <input type="text" onChange={handleLastNameChange} value={lastName} id="last-name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" onChange={handleEmailChange} value={email} id="email" />
        </label>
      </div>
      <div>
        <label>
          Senha:
          <input type="password" onChange={handlePasswordChange} value={password} id="password" />
        </label>
      </div>
      <div>
        <button type="submit">Fazer Cadastro</button>
      </div>
    </form>
  );
}

export default SignupForm;
