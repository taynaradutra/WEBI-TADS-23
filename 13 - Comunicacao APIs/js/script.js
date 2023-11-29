//GET

//fetch
const getPost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) //endpoint
    .then((response) => response.json()) //callback - promise
    .then((json) => {
      console.log(json);
    }) // retorno
    .catch((error) => console.log(error)); // capturar erro
};

getPost(1);

// estruturar código assícrono de modo síncrono (Async / Await)
const getPost2 = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }

    console.log(data);
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

getPost2(1);

// ------------------------------------------------------------------------------
// GET ALL

const getAllPosts = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }

    data.forEach((element) => {
      console.log(
        `Post: ${element.id} \n Título: ${element.title}, Descrição: ${element.body}, Usuário:  ${element.userId}`
      );
    });
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

getAllPosts();

// ------------------------------------------------------------------------------
// POST
const createPost = async (novoPostJSON) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: novoPostJSON,
    });

    const data = await res.json();
    console.log("inserir");
    console.log(data);

    if (!res.ok) {
      console.log(data.description);
      return;
    }
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

let novoPost = {
  userId: 1,
  title: "Novo Post",
  body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto",
};

let novoPostJSON = JSON.stringify(novoPost);

createPost(novoPostJSON);

// ------------------------------------------------------------------------------
// PUT
const updatePost = async (id, postAlterado) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: postAlterado,
      }
    );
    const data = await res.json();
    console.log("alterar");
    console.log(data);

    if (!res.ok) {
      console.log(data.description);
      return;
    }
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

let postAlterado = {
  userId: 1,
  title: "Alterado Post",
  body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto",
};

let postAlteradoJSON = JSON.stringify(postAlterado);
updatePost(2, postAlteradoJSON);

// ------------------------------------------------------------------------------
// DELETE
const deletePost = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log("delete");
    console.log(data); // retorna obj vazio

    if (!res.ok) {
      console.log(data.description);
      return;
    }
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

deletePost(2);
