import dotenv from "dotenv";

dotenv.config();

const baseUrl: string = process.env.SERVER_URI!;

export const healthCheck = async () => {
  try {
    const health = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`Server Returned status code: ${response.status}`);
          return false;
        }
        return response.status;
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.error("Error:", error);
        return false;
      });

    // console.log(`Health: ${health}`);

    return health;
  } catch (error) {
    throw new Error("Error: " + error);
  }
};

export const getTodos = async (): Promise<ITodo[]> => {
  const authToken = localStorage.getItem("token");
  try {
    const todos = await fetch(baseUrl + "/todos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": authToken!,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`Server Returned status code: ${response.status}`);
          return false;
        }
        return response.json();
      })
      .then((todos) => {
        return todos;
      })
      .catch((error) => {
        console.error("Error:", error);
        return false;
      });

    return todos;
  } catch (error) {
    throw new Error("Error: " + error);
  }
};

export const addTodo = async (title: string, description: string) => {
  const authToken = localStorage.getItem("token");
  const todo: Omit<ITodo, "_id"> = {
    todo: title,
    description: description,
    isDone: false,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": authToken,
    },
    body: JSON.stringify(todo),
  };
  try {
    fetch(baseUrl + "/todos/", options)
      .then((response) => {
        if (!response.ok) {
          console.error("Network response was not ok");
          return false;
        }
        return response.json();
      })
      .then((newTodo) => {
        console.log("New Todo:", newTodo);
        return newTodo;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.error("Network response was not ok");
    return false;
  }
};

export const updateTodo = async (Todo: ITodo) => {
  const authToken = localStorage.getItem("token");
  const { _id, todo, description, isDone } = Todo;

  const updateItem: Omit<ITodo, "_id"> = {
    todo,
    description,
    isDone,
  };
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": authToken,
    },
    body: JSON.stringify(updateItem),
  };
  try {
    fetch(baseUrl + `/todos/update/${_id}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((newTodo) => {
        console.log("New Todo:", newTodo);
        return newTodo;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    throw new Error("Error: " + error);
  }
};
