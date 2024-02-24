import { Character } from './../interfaces/character.interfaces';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };

    this.characters.push(newCharacter);
  }
  onDeleteCharacterId(id: string): void {
    this.characters = this.characters.filter((e) => e.id !== id);
  }
}
