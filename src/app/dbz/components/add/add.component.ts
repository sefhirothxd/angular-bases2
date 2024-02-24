import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character:Character = {
      name:'',
      power: 0
    }

    emitCharacter():void{

      // debugger;

      console.log(this.character)
      if(this.character.name.length === 0){
        return;
      }
      this.onNewCharacter.emit(this.character);

      this.character = {
        name :"",
        power : 0
      }
    }
}
