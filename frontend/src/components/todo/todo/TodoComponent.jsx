import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";
import {
  retrieveTodoApi,
  updateTodoApi,
  createTodoApi,
} from "../api/TodoApiService";
import { Formik, Form, Field } from "formik";

export default function TodoComponent() {
  const { id } = useParams();
  const { username } = useAuth();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const navigate = useNavigate();

  const retrieveTodo = async () => {
    try {
      const response = await retrieveTodoApi(username, id);
      setDescription(response.data.description);
      setTargetDate(response.data.targetDate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  function validate(values) {
    let errors = {};
    if (values.description.length < 3) {
      errors.description = "Please enter a valid description.";
    }
    if (values.targetDate === null || values.targetDate === "") {
      errors.targetDate = "Please enter a valid target date.";
    }
    return errors;
  }

  function onSubmit(values) {
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };

    if (id === -1) {
      createTodoApi(username, todo)
        .then(() => navigate("/todos"))
        .catch((error) => console.log(error));
    } else {
      updateTodoApi(username, id, todo)
        .then(() => navigate("/todos"))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="container">
      <h1>Enter Todo Details:</h1>
      <Formik
        initialValues={{ description, targetDate }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form>
            <fieldset className="form-group">
              <label htmlFor="decription">Description</label>
              <Field
                type="text"
                className="form-control"
                name="description"
              ></Field>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="targetDate">Target Date</label>
              <Field
                type="date"
                className="form-control"
                name="targetDate"
              ></Field>
            </fieldset>
            <button className="btn btn-success m-5" type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
