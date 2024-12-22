package controller;

import entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import service.UserService;

import java.util.List;

@RestController()
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping()
    public String index(){
        return "a";
    }
}