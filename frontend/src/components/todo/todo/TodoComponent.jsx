import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";
import { retrieveTodoApi } from "../api/TodoApiService";

export default function TodoComponent() {
  const { id } = useParams();
  const { username } = useAuth();
  const [description, setDescription] = useState("");

  const retrieveTodo = async () => {
    try {
      const response = await retrieveTodoApi(username, id);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details:</h1>
      description: {description}
    </div>
  );
}
