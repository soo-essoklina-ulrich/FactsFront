import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../service/Weather/weather.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface TodoItem {

  todo: string;
  completed: boolean;

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  city: string = 'Lome';
  weatherData: any ;
  todoForm!: FormGroup;
  TODO_ITEM: TodoItem[] = [];

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
        this.getWeather();
        this.getAllToLocalStorage();
        this.FormTodo();
    }

  /**
   * get weather
   */
  getWeather() {
    this.weatherService.getWeatherByCity(this.city).subscribe(
      (res) => {
        this.weatherData = res;
        // console.log(this.weatherData);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  /**
   * form todo
   * @constructor
   */
  FormTodo(){
    return this.todoForm = new FormGroup({
      todo: new FormControl('', Validators.required)
    });
    }

    getAllToLocalStorage () {
    this.TODO_ITEM = JSON.parse(localStorage.getItem('todo') || '[]');
    }

  /**
   * add todo
   */
  addTodo() {

    this.TODO_ITEM.push({
      todo: this.todoForm.value.todo,
      completed: false,
    });
    localStorage.setItem('todo', JSON.stringify(this.TODO_ITEM));
    this.todoForm.reset();
  }

  /**
   * complete todo
   * @param todovalue
   */
  completeTodo(todovalue: string) {
    //get index of todo
    console.log();
    const todoItem = this.TODO_ITEM.find(todo => todo.todo === todovalue);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
        //this.TODO_ITEM[todoIndex].completed = true;
        //update local storage
        localStorage.setItem('todo', JSON.stringify(this.TODO_ITEM));
      }

    }


  /**
   * delete todo
   * @param todo
   */
  deleteTodo(todo: string) {
    const result = this.TODO_ITEM.find((todoI) => todoI.todo === todo);
    if (result) {
      this.TODO_ITEM.splice(this.TODO_ITEM.indexOf(result), 1);
      //update local storage
      localStorage.setItem('todo', JSON.stringify(this.TODO_ITEM));
    }else {
      console.log("todo not found");
    }

  }
}
