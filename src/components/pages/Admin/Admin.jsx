import React, { useState, useRef,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import  "../Email/Email.css"
function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const imageRef = useRef();
  const [image, setImage] = useState(null);


  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://victorioussportfolio.eu5.org/api/list.php');
      setProjects(response.data);
    } catch (error) {
      console.error('Erro ao buscar os projetos:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria um objeto FormData para enviar os dados, incluindo a imagem
    const formData = new FormData();
    formData.append('image', imageRef.current.files[0]);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);

    try {
      await axios.post('http://victorioussportfolio.eu5.org/api/api.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Projeto enviado com sucesso!');
      setTitle('');
      setLink('');
      setDescription('');
      imageRef.current.value = null;
      setImage(null);
    } catch (error) {
      console.error('Erro ao enviar o projeto:', error);
      alert('Ocorreu um erro ao enviar o projeto. Verifique os campos e tente novamente.');
    }
  };

  return (
    
    <section className='Container3 d-flex justify-content-center'>
     <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle" className="mb-3 col-12 mx-auto">
        <Form.Label>Título do projeto</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)} className="mb-3 col-12 mx-auto"
        />
      </Form.Group>

      <Form.Group controlId="formDescription" className="mb-3 col-12 mx-auto">
        <Form.Label>Descrição do projeto</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formProjectLink" className="mb-3 col-12 mx-auto">
        <Form.Label>Link do projeto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3 col-12 mx-auto">
        <Form.Label>Selecione uma foto</Form.Label>
        <Form.Control type="file" name="image" ref={imageRef} onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>

      <button type='submit' className="cybr-btn1 aling-item-center my-3">
                  enviar
                    <span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn1__glitch">
                    enviar
                    </span>
                    <span aria-hidden className="cybr-btn1__tag">
                      R25
                    </span>
                  </button>
    </Form></div></section>
    
    


  );
}

export default Admin;
