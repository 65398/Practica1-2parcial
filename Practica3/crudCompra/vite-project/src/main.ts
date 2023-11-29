import './style.css';

(async () => {
  const response = await fetch('http://localhost:3000/api/compra');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Fecha de Compra</th><th>Id Usuario</th><th>Acciones</th></tr>`;
  data.forEach((compra: ICompra) => {
    divTable += `<tr><td>${compra.id}</td><td>${compra.fechaCompra}</td><td>${compra.usuarioId}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary">Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
    <div class="mb-3">
      <label for="fechaCompra" class="form-label">Fecha de Compra</label>
      <input type="text" class="form-control" id="fechaCompra" aria-describedby="fechaCompra">
    </div>
    <div class="mb-3">
      <label for="usuarioId" class="form-label">Id Usuario</label>
      <input type="text" class="form-control" id="usuarioId">
    </div>
    <button type='button' class="btn btn-save">Guardar</button>
    <button type='submit' class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const fechaCompra = document.querySelector<HTMLInputElement>('#fechaCompra')!.value;
      const usuarioId = Number(document.querySelector<HTMLInputElement>('#usuarioId')!.value);
      const response = await fetch('http://localhost:3000/api/compra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fechaCompra, usuarioId })
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3000/api/compra/${id}`, {
        method: 'DELETE'
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3000/api/compra/${id}`);
      const data = await response.json();
      // agregar botón para cancelar
      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
      <div class="mb-3">
        <label for="fechaCompra" class="form-label">Fecha de Compra</label>
        <input type="text" class="form-control" id="fechaCompra" aria-describedby="fechaCompra" value="${data.fechaCompra}">
      </div>
      <div class="mb-3">
        <label for="usuarioId" class="form-label">Id Usuario</label>
        <input type="text" class="form-control" id="usuarioId" value="${data.usuarioId}">
      </div>
      <button type='submit' class="btn btn-save">Guardar</button>
      ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        alert("Guard")
        e.preventDefault();
        const fechaCompra = document.querySelector<HTMLInputElement>('#fechaCompra')!.value;
        const usuarioId = Number(document.querySelector<HTMLInputElement>('#usuarioId')!.value);
        const response = await fetch(`http://localhost:3000/api/compra/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fechaCompra, usuarioId })
        });
        const data = await response.json();
        console.log(data);
        alert(data);
        // reload page
        location.reload();
      });
    });
  });
})();
