import { useState } from 'react';

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
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Crea un nuovo post</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Autore</label>
            <input type="text" name="author" className="form-control" required onChange={handleFormData} />
          </div>
          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input type="text" name="title" className="form-control" required onChange={handleFormData} />
          </div>
          <div className="mb-3">
            <label className="form-label">Testo del post</label>
            <textarea name="body" className="form-control" required onChange={handleFormData}></textarea>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" name="public" className="form-check-input" onChange={handleFormData} />
            <label className="form-check-label">Rendi pubblico</label>
          </div>
          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
      </div>

    </>

  );
}