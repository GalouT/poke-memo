export function WinnerModal({ handleReset, seconds }) {
  return (
    <section className="winner">
      <div className="text">
        <h2>Ganaste !</h2>
        <p>Tardaste {seconds} segundos</p>
        <button className="reset-button" onClick={handleReset}>
          Empezar de nuevo
        </button>
      </div>
    </section>
  );
}
