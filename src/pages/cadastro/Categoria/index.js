import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }

    function handleChange(event) {
      setValue(event.target.getAttribute('name'), event.target.value);
    }

    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>

          <FormField
            label="Nome da categoria:"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descricao:"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div> */}

          <FormField
            label="Cor:"
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
        </ul>

        <Link to="/cadastro/categoria">
            Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;