package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {
    private TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username) {
        return todoService.findByUsername(username);
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todo retrieveTodo(@PathVariable String username, @PathVariable int id) {
        return todoService.findById(id);
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public void deleteTodo(@PathVariable String username, @PathVariable int id) {
        todoService.deleteById(id);
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public void updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
        todoService.updateTodo(todo);
    }

    @PostMapping(path = "/users/{username}/todos")
    public void createTodo(@PathVariable String username, @RequestBody Todo todo) {
        todoService.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
    }
}
