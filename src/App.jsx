import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

export default function App() {

  const [dataForm, setFormData] = useState({
    title: '',
    author: '',
    body: '',
    public: false
  });

  // Funzione per gestire i cambiamenti nei campi del form
  function handleFormData(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...dataForm,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  // Funzione per inviare il form
  function handleFormSubmit(e) {
    e.preventDefault();

    console.log('Dati inviati:', dataForm);

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      body: JSON.stringify(dataForm)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Risposta dal server:', data);
      })
      .catch(err => {
        console.error('Errore:', err);
      });
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Crea un nuovo post</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Titolo:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={dataForm.title}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autore:</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={dataForm.author}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Testo:</label>
          <textarea
            name="body"
            className="form-control"
            value={dataForm.body}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="public"
            className="form-check-input"
            checked={dataForm.public}
            onChange={handleFormData}
            required
          />
          <label className="form-check-label">Pubblico</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Invia
        </button>
      </form>
    </div>
  );
}