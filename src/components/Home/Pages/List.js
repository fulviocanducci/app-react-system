import React, { useState } from "react";
import axios from "axios";

import Card from "../../Card";
import SpinnerPrimary from "../../Spinner";
import Modal, { useModal } from "../../Modal";

export default function List() {
  const [rep, setRep] = useState("fulviocanducci");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const [open, toggleModal] = useModal();

  function loadItems() {
    setItems([]);
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${rep}/repos?page=1&per_page=20&rel=next`,
        {
          auth: {
            user: "fulviocanducci",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setItems(response.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        toggleModal();
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loadItems();
  }

  function renderItems(item, indice) {
    return (
      <li className="list-group-item" key={indice}>
        {item.full_name}
      </li>
    );
  }

  return (
    <Card title="Lista do GitHub" subTitle="Alguns repositórios do Github">
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mb-4">
          <input
            type="text"
            name="rep"
            id="rep"
            value={rep}
            onChange={(e) => setRep(e.target.value)}
            className="form-control"
            autoComplete={"off"}
          />
        </div>
        <button className="mp-10 btn btn-primary mb-4 mx-sm-2">Procurar</button>
        <div className="form-group mb-4">{loading && <SpinnerPrimary />}</div>
      </form>
      <div className="mt-10">
        <ul className="list-group">
          {items.map((item, indice) => renderItems(item, indice))}
        </ul>
      </div>
      <Modal open={open} toogleModal={toggleModal} />
    </Card>
  );
}
