import { useState, useEffect } from "react";

function FindArticleForm() {
  const [codigo, setCodigo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(codigo);

    //Esta es la parte donde envio el codigo al backend y lo analizo. Por ende deberia limpiar el form.
    setCodigo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Código"
          autoFocus
          onChange={(e) => setCodigo(e.target.value)}
          value={codigo}
        />
        <button>Ok</button>
      </form>
    </div>
  );
}

export default FindArticleForm;
