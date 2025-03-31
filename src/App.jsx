export default function App() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Crea un nuovo post</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Autore</label>
            <input type="text" name="author" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input type="text" name="title" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Testo del post</label>
            <textarea name="body" className="form-control" required></textarea>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" name="public" className="form-check-input" />
            <label className="form-check-label">Rendi pubblico</label>
          </div>
          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
      </div>

    </>

  );
}