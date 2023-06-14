import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import baseUrl from "../../utils/baseUrl";

const UserTable = () => {
    const tableRef = useRef(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/api/db`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: tableRef.current });
    doc.save('users.pdf');
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex justify-content-start align-items-center">
            <img
              src="/images-ceibo/ceibo-logo.png"
              className="black-logo ceibo-logo"
              alt="logo"
            />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h2 style={ {marginBottom: '15px', fontSize: '50px', color: '#b72837'}}>Usuarios registrados</h2>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <button className="btn btn-primary" onClick={handleDownload}>
              Descargar
            </button>
          </div>
        </div>
      </div>

      <table className="table" ref={tableRef} >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Mail</th>
            <th scope="col">Empresa</th>
            <th scope="col">Cargo</th>
            <th scope="col">Donde se entero</th>
            <th scope="col">Topico</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.mail}</td>
              <td>{user.company}</td>
              <td>{user.position}</td>
              <td>{user.checked}</td>
              <td>{user.subject}</td>
              <td>{user.createdAt?.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
